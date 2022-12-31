import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { stat } from 'fs';
import { ToastrService } from 'ngx-toastr';
import { AddTodo } from '../models/IAddTodo';
import { DeleteTodo, IDeleteTodo } from '../models/IDeleteTodo';
import { IGetTodo } from '../models/IGetTodo';
import { IStatusTodo, StatusTodo } from '../models/IStatusTodo';
import { TodoService } from '../_services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  AddTodoFG: FormGroup;
  addTodoToDb: AddTodo;
  getTodoFromDb: IGetTodo[] = [];
  deleteTodoFromDb: IDeleteTodo;
  updateStatus: IStatusTodo;
  constructor(private todoService: TodoService, private toastr:ToastrService) {}

  ngOnInit(): void {
    this.AddTodoFG = new FormGroup({
      addTodoInput: new FormControl(null, Validators.required),
    });

    this.getTodo();
  }

  addTodo() {
    this.addTodoToDb = new AddTodo(this.AddTodoFG.get('addTodoInput').value);

    this.todoService.addTodo(this.addTodoToDb).subscribe((data) => {
      this.getTodo();
      this.toastr.success("Todo Added!")
    },error =>{
      this.toastr.error(error.error)
    });
    this.AddTodoFG.reset();

  }

  getTodo() {
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = JSON.stringify(user.userId);

    this.todoService.getTodo(userId).subscribe((data) => {
      this.getTodoFromDb = data;
    });
  }

  deleteTodo(id: number) {
    this.deleteTodoFromDb = new DeleteTodo(this.getTodoFromDb[0].userId, id);
    this.todoService.deleteTodo(this.deleteTodoFromDb).subscribe((data) => {
      this.getTodo();
      this.toastr.success("Todo Deleted!")

    },error =>{
      this.toastr.error(error.error)
    });
  }

  updateStatusTodo(id: number, status: boolean) {
    this.updateStatus = new StatusTodo(
      this.getTodoFromDb[0].userId,
      id,
      status
    );
    this.todoService.doneTodo(this.updateStatus).subscribe((data) => {
      this.getTodo();
      if(status == true)
      this.toastr.success("Todo marked Completed !")
      this.toastr.success("Todo marked Pending !")
    },
    error =>{
      this.toastr.error(error.error)
    });
  }
}
