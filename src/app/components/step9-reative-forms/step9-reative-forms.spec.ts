import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step9ReativeForms } from './step9-reative-forms';

describe('Step9ReativeForms', () => {
  let component: Step9ReativeForms;
  let fixture: ComponentFixture<Step9ReativeForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step9ReativeForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step9ReativeForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
