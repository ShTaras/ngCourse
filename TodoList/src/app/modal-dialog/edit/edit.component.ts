import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() isConfirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  confirm() {
    //text
   this.isConfirmed.emit(true);
 }
  close() {
   this.isConfirmed.emit(false);
 }


}
