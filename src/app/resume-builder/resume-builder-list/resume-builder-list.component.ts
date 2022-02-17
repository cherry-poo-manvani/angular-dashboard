import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Resume } from '../resume-builder.model';
import { ResumeService } from '../resume-builder.service';

@Component({
  selector: 'app-resume-builder-list',
  templateUrl: './resume-builder-list.component.html',
  styleUrls: ['./resume-builder-list.component.css']
})
export class ResumeBuilderListComponent implements OnInit {
  Resumebuilderlist: Resume[] =[];


  constructor( private fb:ResumeService) { 
    
  }

  ngOnInit(): void { 
    
  
    
  }
}
 

