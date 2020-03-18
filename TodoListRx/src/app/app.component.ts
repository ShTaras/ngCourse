import { TodoServiceService } from './services/todo-service.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TodoList';

  constructor(
    private todoSvc: TodoServiceService
  ) { }
  ngOnInit() {
    this.todoSvc.items.subscribe(
      (data) => {
        //console.log(data);
        this.todoSvc.save(data);
      }
    )
  }
}
