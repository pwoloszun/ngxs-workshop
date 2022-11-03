import { Component, Output, EventEmitter, Input } from '@angular/core';

import { MailEntityParams, EMPTY_MAIL_PARAMS } from '../../models/mail-entity';

@Component({
  selector: 'app-mail-dialog',
  templateUrl: './mail-dialog.component.html',
})
export class MailDialogComponent {

  @Input() mailParams = EMPTY_MAIL_PARAMS;
  @Output() send = new EventEmitter<MailEntityParams>();
  @Output() close = new EventEmitter<MailEntityParams>();

  sendHandler() {
    this.send.emit(this.mailParams);
  }

  closeHandler() {
    this.close.emit(this.mailParams);
  }

}
