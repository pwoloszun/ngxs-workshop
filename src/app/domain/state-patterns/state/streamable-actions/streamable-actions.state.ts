import { Injectable } from '@angular/core';
import {
  State,
  StateContext,
  Selector,
  Store,
  Actions,
  ofActionDispatched,
  NgxsOnInit,
} from '@ngxs/store';
import produce from 'immer';
import { delay, of, switchMap, tap } from 'rxjs';

import { SubscriptionContainer } from '@utils/subscription-container';
import { TodoDto, TodoApiService } from '@infrastructure/api/todo-api.service';

import * as actions from './streamable-actions.actions';
import { StreamableActionsStateModel } from './streamable-actions.types';

type StateCtx = StateContext<StreamableActionsStateModel>;

const defaults: StreamableActionsStateModel = {
  isLoading: false,
  todos: [],
  updatedAt: null,
};

@State<StreamableActionsStateModel>({
  name: 'streamableActions',
  defaults
})
@Injectable()
export class StreamableActionsState implements NgxsOnInit {

  @Selector()
  static isLoading(state: StreamableActionsStateModel): boolean {
    return state.isLoading;
  }

  @Selector()
  static items(state: StreamableActionsStateModel): TodoDto[] {
    return state.todos;
  }

  @Selector()
  static updatedAt(state: StreamableActionsStateModel): number | null {
    return state.updatedAt;
  }

  fetchTodosRequest$ = this.actions$.pipe(
    ofActionDispatched(actions.StreamableActionsFetchTodosRequest),
    tap((action: actions.StreamableActionsFetchTodosRequest) => {
      const { timestamp } = action.payload;
      const state = this.ctx!.getState();
      const nextState = produce(state, (draft) => {
        draft.isLoading = true;
        draft.updatedAt = timestamp;
      });
      this.ctx!.setState(nextState);
    }),
    switchMap((action: actions.StreamableActionsFetchTodosRequest) => {
      return this.todoApiService.getAll();
    }),
    tap((todoDtos) => {
      const nextAction = new actions.StreamableActionsFetchTodosSuccess({
        todos: todoDtos,
      });
      this.ctx!.dispatch(nextAction);
    })
  );

  fetchTodosSuccess$ = this.actions$.pipe(
    ofActionDispatched(actions.StreamableActionsFetchTodosSuccess),
    tap((action: actions.StreamableActionsFetchTodosSuccess) => {
      const { todos } = action.payload;
      const state = this.ctx!.getState();
      const nextState = produce(state, (draft) => {
        draft.isLoading = false;
        draft.todos = todos;
      });
      this.ctx!.setState(nextState);
    })
  );

  private ctx: StateCtx | null = null;
  private subCont = new SubscriptionContainer();

  constructor(
    private store: Store,
    private actions$: Actions,
    private todoApiService: TodoApiService
  ) { }

  ngxsOnInit(ctx: StateCtx): void {
    this.ctx = ctx;
    this.subCont.subscribeToAll([
      this.fetchTodosRequest$,
      this.fetchTodosSuccess$
    ]);
  }

  ngxsOnDestroy(): void {
    this.subCont.dispose();
  }

}
