import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuserFormComponent } from './auser-form/auser-form.component';
import { AuserListComponent } from './auser-list/auser-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AuserListComponent},
      { path: 'alist', component: AuserListComponent},
      {path: 'aform', component: AuserFormComponent},
      {path: 'aedit/:id',component: AuserFormComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuserRoutingModule { }
