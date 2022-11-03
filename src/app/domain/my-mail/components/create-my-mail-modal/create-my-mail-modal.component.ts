import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { distinctUntilChanged, tap } from 'rxjs/operators';

import { SubscriptionContainer } from '@utils/subscription-container';

import { MailDialogComponent } from '../mail-dialog/mail-dialog.component';
import { MailEntityParams, MailStatus } from '../../models/mail-entity';
import { actions, MyMailState } from '../../state/my-mail';

@Component({
  selector: 'app-create-my-mail-modal',
  templateUrl: './create-my-mail-modal.component.html',
})
export class CreateMyMailModalComponent implements OnInit {

  // TODO
  private isMailOpened$: Observable<boolean> = of(false);

  private dialogStatus$ = this.isMailOpened$.pipe(
    distinctUntilChanged()
  );

  private dialogRef: MatDialogRef<MailDialogComponent> | null = null;

  private subs = new SubscriptionContainer();

  get mailEntity(): MailEntityParams { // TODO
    return {
      title: 'Meeting',
      to: ['recipient@qq.qq'],
      from: 'sender@ww.ww',
      content: 'Lorem ipsum...',
      createdAt: Date.now(),
      status: MailStatus.Sent
    };
  }

  constructor(
    private store: Store,
    private dialogService: MatDialog
  ) { }

  createMailHandler() {
    const action = new actions.MyMailDialogOpen(this.mailEntity);
    this.store.dispatch(action);
  }

  ngOnInit(): void {
    this.subs.add = this.dialogStatus$.subscribe(this.dialogStatusChangeHandler);
  }

  ngOnDestroy(): void {
    this.subs.dispose();
  }

  private dialogStatusChangeHandler = (isOpened: boolean) => {
    if (isOpened) {
      this.openDialog();
    } else {
      this.closeDialog();
    }
  };

  private sendHandler = (mailParams: MailEntityParams) => {
    // TODO: event
  };

  private closeHandler = () => {
    const action = new actions.MyMailDialogClose();
    this.store.dispatch(action);
  };

  private openDialog() {
    this.closeDialog();

    this.dialogRef = this.dialogService.open(MailDialogComponent, {
      data: { mailParams: this.mailEntity },
      width: '66%',
      disableClose: true,
    });

    const { componentInstance } = this.dialogRef;
    this.subs.add = componentInstance.send.subscribe(this.sendHandler);
    this.subs.add = componentInstance.close.subscribe(this.closeHandler);
  }

  private closeDialog() {
    this.dialogRef?.close();
  }

}
