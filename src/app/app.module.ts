import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuserModule } from './auser/auser.module';
import { CoreModule } from './core/core.module';
import { ResumeBuilderModule } from './resume-builder/resume-builder.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    ResumeBuilderModule,
    AuserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }