import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupMenu } from './list-group-menu';

describe('ListGroupMenu', () => {
  let component: ListGroupMenu;
  let fixture: ComponentFixture<ListGroupMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListGroupMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGroupMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
