import { NgModule, OnInit } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from './user-service.service';
// import { UserfilterPipe } from '../user/pipes/userfilter.pipe';
import { Departmentfilter } from '../user/pipes/departmentfilter.pipe';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    UserFormComponent,
    UserListComponent,
    Departmentfilter

  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  exports: [
    UserFormComponent,
    UserListComponent,
    // UserfilterPipe,
    Departmentfilter
  ],
  providers:[
    UserServiceService
  ]
})
export class UserModule implements OnInit
{
  ngOnInit(): void {
  } 
 
}


