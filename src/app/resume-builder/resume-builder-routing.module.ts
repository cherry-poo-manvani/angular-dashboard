import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeBuilderFormComponent } from './resume-builder-form/resume-builder-form.component';
import { ResumeBuilderListComponent } from './resume-builder-list/resume-builder-list.component';
import { ResumeBuilderViewComponent } from './resume-builder-view/resume-builder-view.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'resumeList'
  },
  { path: 'resumeList', component: ResumeBuilderListComponent },
  { path: 'resumeForm', component: ResumeBuilderFormComponent },
  { path: 'resumeView', component: ResumeBuilderViewComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeBuilderRoutingModule { }
