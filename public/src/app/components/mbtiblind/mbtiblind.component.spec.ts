import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MbtiblindComponent } from './mbtiblind.component';

describe('MbtiblindComponent', () => {
  let component: MbtiblindComponent;
  let fixture: ComponentFixture<MbtiblindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbtiblindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MbtiblindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
