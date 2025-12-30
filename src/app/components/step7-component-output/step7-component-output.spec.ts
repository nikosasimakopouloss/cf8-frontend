import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step7ComponentOutput } from './step7-component-output';

describe('Step7ComponentOutput', () => {
  let component: Step7ComponentOutput;
  let fixture: ComponentFixture<Step7ComponentOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step7ComponentOutput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step7ComponentOutput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
