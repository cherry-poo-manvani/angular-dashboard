import { Component, OnInit } from '@angular/core';
import { Resume } from '../resume-builder.model';
import { ResumeService } from '../resume-builder.service';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-builder-view.component.html',
  styleUrls: ['./resume-builder-view.component.css']
})
export class ResumeBuilderViewComponent implements OnInit {

  resumeData?: Resume;

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.getResumeData();
  }

  getResumeData(): void {
    this.resumeService.getResume(1).subscribe((data) => {
      this.resumeData = data;
      
    });
  }
}