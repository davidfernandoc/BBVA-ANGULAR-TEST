import { createAction, props } from '@ngrx/store';
import { Todo } from '../data-user/models/todo.models';

export type filtrosValidos = Todo;

export const setFilter = createAction(
    '[Filter] Set Filter',
    props<{ filter: filtrosValidos }>()
);