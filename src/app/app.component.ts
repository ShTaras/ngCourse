import { TodoService } from './shared/todo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private todoSvc: TodoService
  ) { }

  title = 'TodoList';

  todos: Array<any> = [];


  add($event) {
    const text = $event.text;
    const item = this.todoSvc.create(text)
    this.todos.unshift(item);
    console.log('add');
  }
  
  


}
