import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step5EventBind } from './step5-event-bind';

describe('Step5EventBind', () => {
  let component: Step5EventBind;
  let fixture: ComponentFixture<Step5EventBind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step5EventBind]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step5EventBind);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
