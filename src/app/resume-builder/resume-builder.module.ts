import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { ResumeBuilderListComponent } from './resume-builder-list/resume-builder-list.component';
import { ResumeBuilderFormComponent } from './resume-builder-form/resume-builder-form.component';
import { ResumeBuilderViewComponent } from './resume-builder-view/resume-builder-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ResumeBuilderListComponent,
    ResumeBuilderFormComponent,
    ResumeBuilderViewComponent
  ],
  imports: [
    CommonModule,
    ResumeBuilderRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ResumeBuilderModule { }
