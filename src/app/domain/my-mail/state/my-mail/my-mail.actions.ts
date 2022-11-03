import { MailEntityParams } from '../../models/mail-entity';

export class MyMailDialogOpen {
  static readonly type = '[Create MyMail Button] Open Dialog';

  constructor(public payload: MailEntityParams) { }
}

export class MyMailDialogClose {
  static readonly type = '[MyMail Dialog] Close Dialog';
}

// TODO: identify & impl events
