import { createAction, props } from "@ngrx/store";

export const crear = createAction(
    '[TODO] Crea todo',
    props<{ name: string, date: string, birthMonth: string}>()
);
