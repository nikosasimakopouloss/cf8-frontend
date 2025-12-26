import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step4ForDirective } from './step4-for-directive';

describe('Step4ForDirective', () => {
  let component: Step4ForDirective;
  let fixture: ComponentFixture<Step4ForDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step4ForDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step4ForDirective);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
