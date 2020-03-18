import { TodoServiceService } from './../services/todo-service.service';

import { Component, OnInit } from '@angular/core';

import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers:[TodoServiceService],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(200, style({ opacity: 1, transform: 'translateY(0px)' }))
      ]),
      transition(':leave', [
        animate(200, style({ opacity: 0, transform: 'translateY(30px)' }))
      ])
    ])
  ]
})
export class TodoListComponent implements OnInit {

  todoText: string;
  constructor(public todoSvc: TodoServiceService) { }

  ngOnInit(): void {
    this.todoSvc.load();
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
