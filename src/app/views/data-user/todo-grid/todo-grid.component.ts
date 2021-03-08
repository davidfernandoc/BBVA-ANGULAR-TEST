import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.models';
import { AppState } from '../../../app.reducer';
import { filtrosValidos } from '../../filters/filter.actions';

@Component({
  selector: 'app-todo-grid',
  templateUrl: './todo-grid.component.html',
  styleUrls: ['./todo-grid.component.scss']
})
export class TodoGridComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual: filtrosValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {    
    this.store.subscribe(state =>{
      this.todos = state.todos;
      this.filtroActual = state.filters;      
    });    
  }

  public gridMockColumns: string[] = ['name', 'date', 'birthMonth'];

}
