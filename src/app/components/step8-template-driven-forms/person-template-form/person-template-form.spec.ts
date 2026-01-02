import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonTemplateForm } from './person-template-form';

describe('PersonTemplateForm', () => {
  let component: PersonTemplateForm;
  let fixture: ComponentFixture<PersonTemplateForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonTemplateForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonTemplateForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
