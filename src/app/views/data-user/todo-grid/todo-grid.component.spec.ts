import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoGridComponent } from './todo-grid.component';

describe('TodoGridComponent', () => {
  let component: TodoGridComponent;
  let fixture: ComponentFixture<TodoGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
