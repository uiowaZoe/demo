import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorSystemComponent } from './supervisor-system.component';

describe('SupervisorSystemComponent', () => {
  let component: SupervisorSystemComponent;
  let fixture: ComponentFixture<SupervisorSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
