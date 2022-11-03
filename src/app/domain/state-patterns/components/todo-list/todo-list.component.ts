import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { StreamableActionsState, actions, TodoEntity } from '../../state/streamable-actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit {

  @Select(StreamableActionsState.isLoading)
  isLoading$!: Observable<boolean>;

  @Select(StreamableActionsState.items)
  items$!: Observable<TodoEntity[]>;

  @Select(StreamableActionsState.updatedAt)
  updattedAd$!: Observable<number | null>;

  constructor(private store: Store) { }

  refreshHandler() {
    this.fetchTodos();
  }

  ngOnInit(): void {
    this.fetchTodos();
  }

  private fetchTodos() {
    const timestamp = Date.now();
    const action = new actions.StreamableActionsFetchTodosRequest({ timestamp });
    this.store.dispatch(action);
  }

}
