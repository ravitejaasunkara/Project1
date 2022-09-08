import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutdetailseditComponent } from './layoutdetailsedit.component';

describe('LayoutdetailseditComponent', () => {
  let component: LayoutdetailseditComponent;
  let fixture: ComponentFixture<LayoutdetailseditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutdetailseditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutdetailseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
