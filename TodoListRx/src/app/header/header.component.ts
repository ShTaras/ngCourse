import { TodoServiceService } from './../services/todo-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  todoText: string;
  searchText: string;
  constructor(public todoSvc: TodoServiceService) { }

  ngOnInit(): void {
    this.todoText = '';
  }

  addTodo(): void {
    if (this.todoText.trim().length === 0) {
      return;
    }
    this.todoSvc.addTodo(this.todoText);
    this.todoText = '';
  }

}
