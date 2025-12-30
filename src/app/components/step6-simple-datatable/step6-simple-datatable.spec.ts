import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step6SimpleDatatable } from './step6-simple-datatable';

describe('Step6SimpleDatatable', () => {
  let component: Step6SimpleDatatable;
  let fixture: ComponentFixture<Step6SimpleDatatable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step6SimpleDatatable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step6SimpleDatatable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
