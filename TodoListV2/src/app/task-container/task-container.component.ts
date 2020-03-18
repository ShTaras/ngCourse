import { ModalDialogModule } from './../modal-dialog/modal-dialog.module';
import { DeleteComponent } from './../modal-dialog/delete/delete.component';
import { EditComponent } from './../modal-dialog/edit/edit.component';



import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss']
})
export class TaskContainerComponent implements OnInit {

  constructor(
    private modalDialog: ModalDialogModule
  ) { }

  ngOnInit(): void {
  }

  @Input('items') items = [];


  //action(index) {
  // this.items.splice(index, 1);
  // }
  



  onChange($event, indexItem) {
    switch ($event.type) {
      case 'delete':
      //  this.index = indexItem;
       // this.showDialogDelete();
        break;
      case 'edit':
       // this.index = indexItem;
        this.modalDialog.showDialogEdit();
        break;
      default:
        break;
    }


    //this.showDialogDelete();
  }
}
