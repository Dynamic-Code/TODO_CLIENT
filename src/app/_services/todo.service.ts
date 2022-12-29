import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IGetTodo } from '../models/IGetTodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url = environment.todoUrl
  constructor(private http:HttpClient) { }

  addTodo(AddTodo){
    return this.http.post(this.url+'AddTodo',AddTodo)
  }

  getTodo(userId){

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    return this.http.post<IGetTodo[]>(this.url+'GetTodo',userId,{headers:headers})
  }

  deleteTodo(deleteTodoModel){
    return this.http.post(this.url+'DeleteTodo',deleteTodoModel);
  }

  doneTodo(doneTodoModel){
    return this.http.post(this.url+'UpdateStatusTodo',doneTodoModel);
  }
}
