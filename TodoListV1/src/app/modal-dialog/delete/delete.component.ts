import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() isConfirmedDelete: EventEmitter<boolean> = new EventEmitter<boolean>();

   confirm() {
    this.isConfirmedDelete.emit(true);
  }
   close() {
    this.isConfirmedDelete.emit(false);
  }
}
