import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2PersonTable } from './step2-person-table';

describe('Step2PersonTable', () => {
  let component: Step2PersonTable;
  let fixture: ComponentFixture<Step2PersonTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step2PersonTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step2PersonTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
