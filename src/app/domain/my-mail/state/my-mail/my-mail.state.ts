import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector, Actions, ofAction, ofActionDispatched } from '@ngxs/store';
import { NEVER, of, takeUntil, tap, timer } from 'rxjs';
import produce from 'immer';

import { MailSendStage } from '../../models/mai-send-stage.type';
import { MailEntityParams } from '../../models/mail-entity';
import * as actions from './my-mail.actions';

const timeToExpire = {
  cancel: 3500,
  revert: 3500,
};

const timeToShowInfo = 5000;

interface MyMailStateModel {
  mailSendStage: MailSendStage;
  toSend: MailEntityParams | null;
  isMailOpened: boolean;
}

const defaults: MyMailStateModel = {
  mailSendStage: MailSendStage.Idle,
  isMailOpened: false,
  toSend: null,
};

@State<MyMailStateModel>({
  name: 'myMail',
  defaults
})
@Injectable()
export class MyMailState {

  @Selector()
  static emailSendStage(state: MyMailStateModel) {
    return state.mailSendStage;
  }

  @Selector()
  static isMailOpened(state: MyMailStateModel) {
    return state.isMailOpened;
  }

  @Action(actions.MyMailDialogOpen)
  openDialog(ctx: StateContext<MyMailStateModel>, action: actions.MyMailDialogOpen) {
    const state = ctx.getState();
    const { payload } = action;
    const nextState = produce(state, (draft) => {
      draft.isMailOpened = true;
      draft.toSend = payload;
    });
    ctx.setState(nextState);
  }

  @Action(actions.MyMailDialogClose)
  closeDialog(ctx: StateContext<MyMailStateModel>) {
    const state = ctx.getState();
    const nextState = produce(state, (draft) => {
      draft.isMailOpened = false;
    });
    ctx.setState(nextState);
  }

  // TODO: listen to event(s)
  sendFlowStart(ctx: StateContext<MyMailStateModel>, action: any) {
    // TODO
    const state = ctx.getState();
    const nextState = produce(state, (draft) => {
    });
    ctx.setState(nextState);
  }

  // TODO: listen to event(s)
  sendFlowContinueAfterCancelExpire(ctx: StateContext<MyMailStateModel>) {
    // TODO
    const state = ctx.getState();
    const nextState = produce(state, (draft) => {
    });
    ctx.setState(nextState);
  }

  // TODO: listen to event(s)
  sendFlowContinueAfterRevertExpire(ctx: StateContext<MyMailStateModel>) {
    // TODO
    const state = ctx.getState();
    const nextState = produce(state, (draft) => {
    });
    ctx.setState(nextState);
  }

  // TODO: listen to event(s)
  cancelFlow(ctx: StateContext<MyMailStateModel>) {
    // TODO
    const state = ctx.getState();
    const nextState = produce(state, (draft) => {
    });
    ctx.setState(nextState);
  }

  // TODO: listen to event(s)
  revertFlow(ctx: StateContext<MyMailStateModel>) {
    // TODO
    const state = ctx.getState();
    const nextState = produce(state, (draft) => {
    });
    ctx.setState(nextState);
  }

  // TODO: listen to event(s)
  flowEnd(ctx: StateContext<MyMailStateModel>) {
    const state = ctx.getState();
    const nextState = produce(state, (draft) => {
      draft.mailSendStage = MailSendStage.Idle;
      draft.toSend = null;
    });
    ctx.setState(nextState);
  }

  // TODO
  private cancelStartActions$ = NEVER;

  // TODO
  private resumeSendActions$ = NEVER;

  // TODO
  private revertStartActions$ = NEVER;

  constructor(private actions$: Actions) { }

}
