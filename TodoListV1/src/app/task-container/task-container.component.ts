import { DeleteComponent } from './../modal-dialog/delete/delete.component';
import { EditComponent } from './../modal-dialog/edit/edit.component';



import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss']
})
export class TaskContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('items') items = [];


  //action(index) {
  // this.items.splice(index, 1);
  // }
  isDialogDeleteVisible: boolean = false;
  isDialogEditVisible: boolean = false;
  showDialogDelete() {
    this.isDialogDeleteVisible = true;
  }

  showDialogEdit() {
    this.isDialogEditVisible = true;
  }



  index: number;

  closeDialogDelete($event) {
    if ($event) {
      this.items.splice(this.index, 1);
    }
    this.isDialogDeleteVisible = false;
  }

  closeDialogEdit($event) {
    if ($event) {
      console.log(this.items[this.index]);
      this.items[this.index].text = $event;
      
    }
    this.isDialogEditVisible = false;
  }



  onChange($event, indexItem) {
    switch ($event.type) {
      case 'delete':
        this.index = indexItem;
        this.showDialogDelete();
        break;
      case 'edit':
        this.index = indexItem;
        this.showDialogEdit();
        break;
      default:
        break;
    }


    //this.showDialogDelete();
  }
}
