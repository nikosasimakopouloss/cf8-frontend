import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3PersonTableInput } from './step3-person-table-input';

describe('Step3PersonTableInput', () => {
  let component: Step3PersonTableInput;
  let fixture: ComponentFixture<Step3PersonTableInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step3PersonTableInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step3PersonTableInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
