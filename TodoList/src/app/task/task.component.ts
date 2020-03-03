import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input('model') model: any = {};
  @Output('onChange') onChange: EventEmitter<any> = new EventEmitter<any>();

  done() {
    this.model.done = !this.model.done;
  }
  delete() {
    this.onChange.emit({
      item:this.model,
      type:'delete'
    });
  }
  edit() {
    this.onChange.emit({
      item:this.model,
      type:'edit'
    });
  }
  upImportance() {
    if (this.model.importance < 5) this.model.importance++;
  }
  downImportance() {
    if (this.model.importance > 1) this.model.importance--;
  }

 
}
