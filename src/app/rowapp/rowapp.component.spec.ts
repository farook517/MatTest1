import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowappComponent } from './rowapp.component';

describe('RowappComponent', () => {
  let component: RowappComponent;
  let fixture: ComponentFixture<RowappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
