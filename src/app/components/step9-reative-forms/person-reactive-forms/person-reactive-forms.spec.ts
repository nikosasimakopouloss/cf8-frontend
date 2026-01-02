import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonReactiveForms } from './person-reactive-forms';

describe('PersonReactiveForms', () => {
  let component: PersonReactiveForms;
  let fixture: ComponentFixture<PersonReactiveForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonReactiveForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonReactiveForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
