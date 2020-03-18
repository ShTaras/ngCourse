import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() isConfirmedEdit: EventEmitter<any> = new EventEmitter<any>();
  @Input('task') task: any;

  newText: string = '';
  save() {
    //text
    console.log(this.task);
    this.isConfirmedEdit.emit(this.newText);
  }
  cancel() {
    this.isConfirmedEdit.emit(false);
  }


}
