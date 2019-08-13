import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MbtioneComponent } from './mbtione.component';

describe('MbtioneComponent', () => {
  let component: MbtioneComponent;
  let fixture: ComponentFixture<MbtioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbtioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MbtioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
