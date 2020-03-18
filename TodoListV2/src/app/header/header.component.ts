import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output('onAdd') onAdd: EventEmitter<any> = new EventEmitter<any>();

  todoText:string = "";

add(){
  this.onAdd.emit({
    text: this.todoText
  });
  this.todoText = "";
}

}
