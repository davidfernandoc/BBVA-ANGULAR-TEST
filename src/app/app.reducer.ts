import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './views/data-user/models/todo.models';
import { todoReducer } from './views/data-user/todo.reducer';
import { filterReducer } from './views/filters/filter.reducer';
import { filtrosValidos } from './views/filters/filter.actions';

export interface AppState{
    todos: Todo[],
    filters: filtrosValidos
}

export const appReducer: ActionReducerMap<AppState> = {
    todos: todoReducer,   
    filters: filterReducer  
}