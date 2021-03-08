import { createReducer, on } from "@ngrx/store";
import * as actions from './todo.actions';
import { Todo } from './models/todo.models';

export const estadoInicial: Todo[] = [
    new Todo('David', '2021-03-03','Abril'),
    new Todo('Juan', '2021-03-04','Noviembre'),
    new Todo('Pedro', '2021-03-03','Mayo'),
    new Todo('Ivan','2021-03-05','Enero')
];

const _todoReducer = createReducer(estadoInicial,
    on(actions.crear, (state, {name, date, birthMonth}) => [...state, new Todo(name, date, birthMonth)]),
);

export function todoReducer(state, action){
    return _todoReducer(state, action);
}