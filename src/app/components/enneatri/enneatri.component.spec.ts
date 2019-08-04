import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnneatriComponent } from './enneatri.component';

describe('EnneatriComponent', () => {
  let component: EnneatriComponent;
  let fixture: ComponentFixture<EnneatriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnneatriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnneatriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
