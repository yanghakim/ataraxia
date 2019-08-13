import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MbtitwoComponent } from './mbtitwo.component';

describe('MbtitwoComponent', () => {
  let component: MbtitwoComponent;
  let fixture: ComponentFixture<MbtitwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbtitwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MbtitwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
