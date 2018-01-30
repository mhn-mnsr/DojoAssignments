import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldGeneratorComponent } from './gold-generator.component';

describe('GoldGeneratorComponent', () => {
  let component: GoldGeneratorComponent;
  let fixture: ComponentFixture<GoldGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
