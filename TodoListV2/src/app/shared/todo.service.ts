import { Injectable } from '@angular/core';
import{ TodoItem} from './todoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {}
   


create(taskText):TodoItem{
  return{
    date: new Date(),
    importance: 1,
    text: taskText,
    done: false,
    id: new Date().toDateString() 
  }
}

}
