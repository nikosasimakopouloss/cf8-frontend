import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step6SimpleDatatableShow } from './step6-simple-datatable-show';

describe('Step6SimpleDatatableShow', () => {
  let component: Step6SimpleDatatableShow;
  let fixture: ComponentFixture<Step6SimpleDatatableShow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step6SimpleDatatableShow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step6SimpleDatatableShow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
