import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuserFormComponent } from './auser-form.component';

describe('AuserFormComponent', () => {
  let component: AuserFormComponent;
  let fixture: ComponentFixture<AuserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuserFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
