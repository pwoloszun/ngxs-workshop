import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';
import { Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';

import { SubscriptionContainer } from '@utils/subscription-container';

import { MailSendStage } from '../../models/mai-send-stage.type';
import { MyMailState, actions } from '../../state/my-mail';

@Component({
  selector: 'app-my-mail-info-toast',
  templateUrl: './my-mail-info-toast.component.html',
})
export class MyMailInfoToastComponent implements OnInit, OnDestroy {

  //TODO
  private emailSendStage$: Observable<MailSendStage> = of(MailSendStage.Idle);

  private snackBarRef: MatSnackBarRef<TextOnlySnackBar> | null = null;
  private subs = new SubscriptionContainer();

  constructor(
    private store: Store,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.subs.add = this.emailSendStage$.subscribe(this.emailStageChangeHandler);
  }

  ngOnDestroy(): void {
    this.subs.dispose();
  }

  private emailStageChangeHandler = (stage: MailSendStage) => {
    switch (stage) {
      case MailSendStage.SendingCancellable: {
        this.showCanCancelMessage();
        return;
      }
      case MailSendStage.SendingReversible: {
        this.showCanRevertMessage();
        return;
      }
      case MailSendStage.Sent: {
        this.showSuccessfullySentMessage();
        return;
      }
      case MailSendStage.Idle: {
        this.closeSnackBar();
        return;
      }
      case MailSendStage.SendingCancelled: {
        this.showCancellingMessage();
        return;
      }
      case MailSendStage.SendingReverted: {
        this.showRevertingMessage();
        return;
      }
      default: {
        throw new Error(`Unknown MailSendStage: ${stage}`);
      }
    }
  };

  private showCanCancelMessage() {
    this.snackBarRef = this.matSnackBar.open('Sending...', 'Cancel');
    this.subs.add = this.snackBarRef!.onAction().subscribe(() => {
      // TODO: cancel event
    });
  }

  private showCanRevertMessage() {
    this.snackBarRef = this.matSnackBar.open('Mail has been sent.', 'Revert');
    this.subs.add = this.snackBarRef!.onAction().subscribe(() => {
      // TODO: revert event
    });
  }

  private showSuccessfullySentMessage() {
    this.snackBarRef = this.matSnackBar.open('Mail successfully sent!');
  }

  private closeSnackBar() {
    this.snackBarRef?.dismiss();
  }

  private showCancellingMessage() {
    this.snackBarRef = this.matSnackBar.open('Canceling...', 'Resume');
    this.subs.add = this.snackBarRef!.onAction().subscribe(() => {
      // TODO: resume event
    });
  }

  private showRevertingMessage() {
    this.snackBarRef = this.matSnackBar.open('Reverting changes...');
  }

}
