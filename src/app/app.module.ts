import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { environment } from 'src/environments/environment';

// import { GlobalClientErrorHandlerModule } from '@infrastructure/error-handlers';
import { GlobalErrorModule } from '@infrastructure/interceptors';
import { DefaultLayoutModule } from '@application/layouts';
import { AppRoutingModule } from '@application/routing';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // vendor
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // app state
    NgxsModule.forRoot([], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),

    // infrastructure
    GlobalErrorModule.forRoot(),
    // GlobalClientErrorHandlerModule.forRoot(),

    // application, routing
    AppRoutingModule,
    DefaultLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
