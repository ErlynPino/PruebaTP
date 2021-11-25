import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todos } from '../models/todos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getTodos() {
    return this.httpClient.post<Todos[]>(`${environment.url}/todos`, {});
  }
}
