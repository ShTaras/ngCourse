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


  @Input('task') task: any = {};
  @Output('onChange') onChange: EventEmitter<any> = new EventEmitter<any>();

  done() {
    this.task.done = !this.task.done;
  }
  delete() {
    this.onChange.emit({
      item:this.task,
      type:'delete'
    });
  }
  edit() {
    this.onChange.emit({
      item:this.task,
      type:'edit'
    });
  }
  upImportance() {
    if (this.task.importance < 5) this.task.importance++;
  }
  downImportance() {
    if (this.task.importance > 1) this.task.importance--;
  }

 
}
