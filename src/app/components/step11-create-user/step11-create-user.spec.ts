import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step11CreateUser } from './step11-create-user';

describe('Step11CreateUser', () => {
  let component: Step11CreateUser;
  let fixture: ComponentFixture<Step11CreateUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step11CreateUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step11CreateUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
