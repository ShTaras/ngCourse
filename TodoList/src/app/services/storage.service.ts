import { TodoItem } from './../interfaces/todo-item';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  save(data:TodoItem[]){
    localStorage.setItem('todo', JSON.stringify(data));
  }

  load(){
    if (!(localStorage.getItem(`todo`) === null)) {
      return JSON.parse(localStorage.getItem('todo'));
  }
  
    console.log('CREATE LOAD LOGIC');
    
  }
}
