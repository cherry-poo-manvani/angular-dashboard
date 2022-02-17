import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuserRoutingModule } from './auser-routing.module';
import { AuserFormComponent } from './auser-form/auser-form.component';
import { AuserListComponent } from './auser-list/auser-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuserServiceService } from '../auser/Services/auser-service.service'


@NgModule({
  declarations: [
    AuserFormComponent,
    AuserListComponent,

  ],

  imports: [
    CommonModule,
    AuserRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    AuserRoutingModule,
    AuserFormComponent,
    AuserListComponent

  ],
  providers: [
    AuserServiceService
  ]
})
export class AuserModule { }
