import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAddComponent } from './top-add.component';

describe('TopAddComponent', () => {
  let component: TopAddComponent;
  let fixture: ComponentFixture<TopAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
