import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  public selectedDate = { milliseconds: null, formated: null };
  public selectedValue : string;
  public timeout : any;
  public url: string;  
  
  constructor() {}

  ngOnInit(): void {    
  }
  
}
