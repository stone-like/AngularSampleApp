import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosearchComponent } from './todosearch.component';

describe('TodosearchComponent', () => {
  let component: TodosearchComponent;
  let fixture: ComponentFixture<TodosearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
