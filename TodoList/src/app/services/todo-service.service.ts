import { StorageService } from './storage.service';
import { TodoItem } from './../interfaces/todo-item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  constructor(private storageSvc: StorageService) { }





  private todos: Array<TodoItem> = [];
  private sort: string = 'all'

  private countTodo: number = 0;
  private countDoneTodo: number = 0;

  load() {
    this.todos = this.storageSvc.load();
  }
  save(){
    this.storageSvc.save(this.todos);
  }

  addTodo(todoText: string): void {
    if (todoText.trim().length === 0) {
      return;
    }
    this.todos.unshift({
      date: new Date(),
      importance: 1,
      text: todoText,
      done: false,
      id: this.createId()
    })
    console.log(this.todos);
    this.save();

  }

  createId(): string {
    return `f${(+new Date).toString(16)}`
  }
  deleteTodo(id: string) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.save();
  }
  upImportance(todo: TodoItem) {
    if (todo.importance < 5) todo.importance++;
    this.save();
  }
  downImportance(todo: TodoItem) {
    if (todo.importance > 1) todo.importance--;
    this.save();
  }

  changeSortDate() {
    this.sort = 'date';
  }
  changeSortPriority() {
    this.sort = 'importance';
  }
  changeSortDone() {
    this.sort = 'done';
  }

  todosSortered(): TodoItem[] {
    switch (this.sort) {
      case 'all':
        return this.todos;
      case 'done':
        return this.todos.sort((prevTodo, nextTodo) => Number(nextTodo.done) - Number(prevTodo.done));
      case 'importance':
        return this.todos.sort((prevTodo, nextTodo) => nextTodo.importance - prevTodo.importance);
      case 'date':
        return this.todos.sort((prevTodo, nextTodo) => Number(nextTodo.date) - Number(prevTodo.date));
      default:
        break;
    }
    return this.todos;
  }
}
