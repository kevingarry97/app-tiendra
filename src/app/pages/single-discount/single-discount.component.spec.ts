import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDiscountComponent } from './single-discount.component';

describe('SingleDiscountComponent', () => {
  let component: SingleDiscountComponent;
  let fixture: ComponentFixture<SingleDiscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDiscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
