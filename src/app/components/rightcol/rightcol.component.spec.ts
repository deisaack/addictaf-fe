import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightcolComponent } from './rightcol.component';

describe('RightcolComponent', () => {
  let component: RightcolComponent;
  let fixture: ComponentFixture<RightcolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightcolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightcolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
