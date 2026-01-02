import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step8TemplateDrivenForms } from './step8-template-driven-forms';

describe('Step8TemplateDrivenForms', () => {
  let component: Step8TemplateDrivenForms;
  let fixture: ComponentFixture<Step8TemplateDrivenForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step8TemplateDrivenForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step8TemplateDrivenForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
