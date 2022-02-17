import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeBuilderListComponent } from './resume-builder-list.component';

describe('ResumeBuilderListComponent', () => {
  let component: ResumeBuilderListComponent;
  let fixture: ComponentFixture<ResumeBuilderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeBuilderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeBuilderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
