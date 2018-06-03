import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincolComponent } from './maincol.component';

describe('MaincolComponent', () => {
  let component: MaincolComponent;
  let fixture: ComponentFixture<MaincolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaincolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
