import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TodoGridComponent } from './todo-grid/todo-grid.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { FiltroPipe } from './filter.pipe';

@NgModule({
  declarations: [TodoGridComponent, TodoAddComponent, TodoPageComponent, FiltroPipe],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule    
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE, useValue: 'en-GB'
    },
  ],  
  bootstrap: []
})
export class TodoModule { }
