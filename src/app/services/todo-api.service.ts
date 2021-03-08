import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const TODO_API_URL: string = 'https://google.es'

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {


  constructor(private http: HttpClient) { }

  public search(searchProps: { name?: string, date?: Date, month?: string }): Observable<any> {
    return this.http.get(`${TODO_API_URL}/search?${this.serialize(searchProps)}`);
  }
    
  private serialize(obj: {}): string {
    return Object.keys(obj).filter(k => obj[k] != null && obj[k] != '').map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');
  }
}
