import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeBuilderFormComponent } from './resume-builder-form.component';

describe('ResumeBuilderFormComponent', () => {
  let component: ResumeBuilderFormComponent;
  let fixture: ComponentFixture<ResumeBuilderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeBuilderFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeBuilderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
