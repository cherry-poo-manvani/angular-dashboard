import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuserListComponent } from './auser-list.component';

describe('AuserListComponent', () => {
  let component: AuserListComponent;
  let fixture: ComponentFixture<AuserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
