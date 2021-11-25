import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Todos } from 'src/app/core/models/todos';
import { TodoService } from '../../../core/services/todo.service';

@Component({
  selector: 'app-todo-screen',
  templateUrl: './todo-screen.component.html',
  styleUrls: ['./todo-screen.component.css']
})
export class TodoScreenComponent implements OnInit {
  todos: Todos[] = [];

  constructor(
    private todoService: TodoService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos() {
    this.todoService.getTodos()
      .subscribe(res => {
        this.todos = res;
      })
  }

  changueTodoDone(todoId: number) {
    return this.todos.map(todo => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
    },
      (err: HttpErrorResponse) => {
        this.toastrService.error(`${err.error}`, 'Major Error', {
          timeOut: 3000,
        });
      }
    );
  }
}
