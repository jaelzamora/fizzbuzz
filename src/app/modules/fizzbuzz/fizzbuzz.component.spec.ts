import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FizzbuzzComponent } from './fizzbuzz.component';

describe('FizzbuzzComponent', () => {
  let component: FizzbuzzComponent;
  let fixture: ComponentFixture<FizzbuzzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FizzbuzzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FizzbuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create startnumber', () => {
    component.buttonClick();
    expect(component.fizzbuzz.startNumber).toBeTruthy();
  });

  it('should create end number', () => {
    component.buttonClick();
    expect(component.fizzbuzz.endNumber).toBeTruthy();
  });

  it('start number should be bigger than end number', () => {
    component.buttonClick();
    expect(component.fizzbuzz.startNumber).toBeLessThan(component.fizzbuzz.endNumber);
  });

  it('should create fizzbuzz results', () => {
    component.buttonClick();
    expect(component.fizzBuzzResults.length).toBeGreaterThan(0);
  });

});
