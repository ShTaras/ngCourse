import { TodoServiceService } from './services/todo-service.service';

import { Component, OnInit } from '@angular/core';
import { MetaService } from './services/meta.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TodoList';

  constructor(
    private todoSvc: TodoServiceService,public metaSvc: MetaService
  ) { }
  ngOnInit() {
    this.todoSvc.items.subscribe(
      (data) => {
        this.todoSvc.save(data);
        this.metaSvc.countAll(data.length);
        this.metaSvc.countDone(data.filter(item => item.done).length);
      }
    )
  }
}
