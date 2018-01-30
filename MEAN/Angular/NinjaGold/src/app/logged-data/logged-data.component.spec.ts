import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedDataComponent } from './logged-data.component';

describe('LoggedDataComponent', () => {
  let component: LoggedDataComponent;
  let fixture: ComponentFixture<LoggedDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
