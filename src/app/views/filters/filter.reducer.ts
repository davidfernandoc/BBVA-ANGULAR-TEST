import { createReducer, on } from '@ngrx/store';
import * as actions from './filter.actions';
import { filtrosValidos } from './filter.actions';
import { Todo } from '../data-user/models/todo.models';

export const initialState: Todo = { name: '', date: '', birthMonth: '' };

const _filterReducer = createReducer(initialState,
    on(actions.setFilter, (state: filtrosValidos, {filter}) => filter ),    
);

export function filterReducer(state, action){
    return _filterReducer(state, action);
}