import { fakeAsync, tick } from '@angular/core/testing';

import { createStore } from 'src/test-utils/create-store';
import { expectStateChanges } from 'src/test-utils/expect-state-changes';

import { MyMailState } from './my-mail.state';
import * as actions from './my-mail.actions';
import { MailEntityParams, MailStatus } from '../../models/mail-entity';
import { MailSendStage } from '../../models/mai-send-stage.type';

describe('MyMail actions', () => {

  it('should perform happy path', fakeAsync(() => {
    // TODO

    // tick(15_000);
  }));

});

function createMailEntity(): MailEntityParams {
  return {
    title: 'Meeting',
    to: ['recipient@qq.qq'],
    from: 'sender@ww.ww',
    content: 'Lorem ipsum...',
    createdAt: Date.now(),
    status: MailStatus.Sent,
  };
}
