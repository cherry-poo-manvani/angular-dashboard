import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeBuilderViewComponent } from './resume-builder-view.component';

describe('ResumeBuilderViewComponent', () => {
  let component: ResumeBuilderViewComponent;
  let fixture: ComponentFixture<ResumeBuilderViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeBuilderViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeBuilderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
