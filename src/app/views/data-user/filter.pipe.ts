import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.models';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filter: { name?: string, date?: string, birthMonth?: string }): Todo[] {

    let result: Todo[] = [...todos];

    if(filter.name != null && filter.name !== '') { 
      if(filter.date != null && filter.date !== ''){
        if(filter.birthMonth != null && filter.birthMonth !== ''){
          result = todos.filter((t) => t.name === filter.name && t.date === filter.date && t.birthMonth === filter.birthMonth); 
        }
        else
        {
          result = todos.filter((t) => t.name === filter.name && t.date === filter.date); 
        }
      }
      else
      {
        result = todos.filter((t) => t.name === filter.name); 
      }      
    }
    else
    {
      if(filter.date != null && filter.date !== ''){
        if(filter.birthMonth != null && filter.birthMonth !== ''){
          result = todos.filter((t) => t.date === filter.date && t.birthMonth === filter.birthMonth); 
        }
        else
        {
          result = todos.filter((t) => t.date === filter.date); 
        }
      }
      else
      {
        if(filter.birthMonth != null && filter.birthMonth !== ''){
          result = todos.filter((t) => t.birthMonth === filter.birthMonth); 
        }
      }
    }

    return result;
  }
}
