import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftcolComponent } from './leftcol.component';

describe('LeftcolComponent', () => {
  let component: LeftcolComponent;
  let fixture: ComponentFixture<LeftcolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftcolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftcolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
