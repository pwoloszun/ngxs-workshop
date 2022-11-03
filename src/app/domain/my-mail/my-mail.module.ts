import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { MatDialog } from '@angular/material/dialog';

import { CustomMaterialModule } from '@ui/custom-material';

import { MyMailListComponent } from './components/my-mail-list/my-mail-list.component';
import { CreateMyMailModalComponent } from './components/create-my-mail-modal/create-my-mail-modal.component';
import { MyMailInfoToastComponent } from './components/my-mail-info-toast/my-mail-info-toast.component';
import { MailDialogComponent } from './components/mail-dialog/mail-dialog.component';
import { MyMailState } from './state/my-mail';

const PRIV_DECLARABLES = [
  MailDialogComponent,
];

const PUB_DECLARABLES = [
  MyMailListComponent,
  CreateMyMailModalComponent,
  MyMailInfoToastComponent,
];

@NgModule({
  declarations: [
    ...PRIV_DECLARABLES,
    ...PUB_DECLARABLES,
  ],
  exports: [
    ...PUB_DECLARABLES,
  ],
  imports: [
    CommonModule,
    // ui
    CustomMaterialModule,
    // state
    NgxsModule.forFeature([MyMailState]),

  ],
  providers: [
    MatDialog
  ],
  entryComponents: [
    MailDialogComponent
  ]
})
export class MyMailModule { }
