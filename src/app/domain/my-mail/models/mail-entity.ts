export enum MailStatus {
  Draft = 'DRAFT',
  Sent = 'SENT',
}

export interface MailEntity {
  id: number;
  title: string;
  to: string[];
  from: string;
  content: string;
  createdAt: number | null;
  status: MailStatus;
};

export type MailEntityParams = Omit<MailEntity, 'id'>;

export const EMPTY_MAIL_PARAMS: MailEntityParams = {
  title: '',
  to: [''],
  from: '',
  content: '',
  createdAt: null,
  status: MailStatus.Draft
};
