
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { CoreComponent } from './core/core.component';
// import { UListComponent } from './user-form/u-list/u-list.component';
// import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [ 
  
  {
    path: 'user', 
    loadChildren: () => import('./user/user.module')  
    .then(m => m.UserModule)  
 },

 {
  path: 'resume', 
  loadChildren: () => import('./resume-builder/resume-builder.module')  
  .then(m => m.ResumeBuilderModule)  
},
{
  path: 'Auser', 
  loadChildren: () => import('./auser/auser-routing.module')  
  .then(m => m.AuserRoutingModule)  
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
