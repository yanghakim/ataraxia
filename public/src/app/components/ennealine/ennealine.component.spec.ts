import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnnealineComponent } from './ennealine.component';

describe('EnnealineComponent', () => {
  let component: EnnealineComponent;
  let fixture: ComponentFixture<EnnealineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnnealineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnnealineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
