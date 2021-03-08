import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { crear } from '../todo.actions';
import { TodoApiService } from '../../../services/todo-api.service';
import { setFilter } from '../../filters/filter.actions';
import { Todo } from '../models/todo.models';

interface Month {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  public timeout : any;
  public selectedDate = { milliseconds: null, formated: null };
  public selectedValue : string;

  filter: Todo;

  //Componentes
  txtInput = new FormControl;
  datePicker = new FormControl;
  selectBirthMonth = new FormControl;
  
  //Datepicker Config
  public pickerConfig = {    
    maxDate: new Date(),
    minDate: new Date(new Date().getTime()-(5*24*60*60*1000))    
  }

  constructor(private store: Store<AppState>, private todoApi: TodoApiService) {            
      this.txtInput = new FormControl('', Validators.compose([Validators.required, Validators.maxLength(10)]));
      this.datePicker = new FormControl('', Validators.required);
      this.selectBirthMonth = new FormControl('', Validators.required);

      this.datePicker.valueChanges.subscribe(data => {        
        if (this.datePicker.valid)
        {
          this.selectedDate.milliseconds = data.unix();
          this.selectedDate.formated = data.format('yyyy-MM-DD');
          clearTimeout(this.timeout);
        }
      });

      this.selectBirthMonth.valueChanges.subscribe(data => {        
        if (this.selectBirthMonth.valid)
        {          
          clearTimeout(this.timeout);
        }
      });
   }

  ngOnInit(): void {        
  }

  public months: Month[] = [
    {value: '01', viewValue: 'Enero'},
    {value: '02', viewValue: 'Febrero'},
    {value: '03', viewValue: 'Marzo'},
    {value: '04', viewValue: 'Abril'},
    {value: '05', viewValue: 'Mayo'},
    {value: '06', viewValue: 'Junio'},
    {value: '07', viewValue: 'Julio'},
    {value: '08', viewValue: 'Agosto'},
    {value: '09', viewValue: 'Septiembre'},
    {value: '10', viewValue: 'Octubre'},
    {value: '11', viewValue: 'Noviembre'},
    {value: '12', viewValue: 'Diciembre'}
  ];  

  public keypress(e)
  {
    return (e.charCode > 64 && e.charCode < 91) || (e.charCode > 96 && e.charCode < 123)
  }

  public keydown(e)
  {
    let datePickerSt = null;
    if (this.datePicker.valid)
    {
      datePickerSt = this.datePicker.value.format('yyyy-MM-DD')
    }
    
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.filter = {name: this.txtInput.value, date: datePickerSt, birthMonth:this.selectBirthMonth.value};        
      this.store.dispatch(setFilter({filter: this.filter}));
      this.todoApi.search({name:this.txtInput.value, date: datePickerSt, month:this.selectBirthMonth.value}).toPromise().then((res) => console.log(res));
      clearTimeout(this.timeout)
    },5000)
  }

  public cleanComponents()
  {
    this.txtInput.reset();   
    this.datePicker.reset(); 
    this.selectBirthMonth.reset();
    this.selectedDate.milliseconds = '';
    this.selectedDate.formated  = '';
  }

  public onSubmit(e) {        
    
    if (e.submitter.name === 'add')
    {
      //Si es valido dispara la acccion Crear del Store.
      if(this.txtInput.valid && this.datePicker.valid && this.selectBirthMonth.valid) {
        let datePickerSt = null;
        if (this.datePicker.valid)
        {
          datePickerSt = this.datePicker.value.format('yyyy-MM-DD')
        }
        this.store.dispatch(crear({name:this.txtInput.value, date: datePickerSt, birthMonth:this.selectBirthMonth.value}));        

        this.cleanComponents();
      } 
      else {
        alert("UNO O MAS CAMPOS NO CUMPLEN CON LAS VALIDACIONES");
      }
    }

    if (e.submitter.name === 'filter')
    {
      //Si es valido al menos uno dispara la acccion Crear del Store.
      if(this.txtInput.valid || this.datePicker.valid || this.selectBirthMonth.valid) {
        let datePickerSt = null;
        if (this.datePicker.valid)
        {
          datePickerSt = this.datePicker.value.format('yyyy-MM-DD')
        }

        this.filter = {name: this.txtInput.value, date: datePickerSt, birthMonth:this.selectBirthMonth.value};        
        this.store.dispatch(setFilter({filter: this.filter}));
        this.todoApi.search({name:this.txtInput.value, date: datePickerSt, month:this.selectBirthMonth.value}).toPromise().then((res) => console.log(res));
      } 
      else {
        alert("UNO O MAS CAMPOS NO CUMPLEN CON LAS VALIDACIONES");
      }      
    }

    if (e.submitter.name === 'clean')
    {
      this.filter = {name: '', date: '', birthMonth:''};        
      this.store.dispatch(setFilter({filter: this.filter}));

      this.cleanComponents();
    }
  }
}
