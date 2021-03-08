export class Todo {    
    public name: string;
    public date: string;
    public birthMonth: string;

    constructor(name?: string, date?: string, birthMonth?: string){
        this.name = name;
        this.date = date;
        this.birthMonth = birthMonth;        
    }
}