import { TodoServiceService } from './../services/todo-service.service';
import { TodoItem } from './../interfaces/todo-item';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss']
})
export class TodoitemComponent implements OnInit {

  @Input() todo: TodoItem;

  constructor(public todoSvc: TodoServiceService) { }

  ngOnInit(): void {
  }


  

}
