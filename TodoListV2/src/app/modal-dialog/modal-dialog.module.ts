import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [DeleteComponent, EditComponent],
  imports: [
    CommonModule
  ]
  
})
export class ModalDialogModule { 

  private isDialogDeleteVisible: boolean = false;
  private isDialogEditVisible: boolean = false;

  public showDialogDelete() {
    this.isDialogDeleteVisible = true;
  }

  public showDialogEdit() {
    this.isDialogEditVisible = true;
  }



  

  // closeDialogDelete($event) {
  //   if ($event) {
  //    // this.items.splice(this.index, 1);
  //   }
  //   this.isDialogDeleteVisible = false;
  // }

  // closeDialogEdit($event) {
  //   if ($event) {
  //    // console.log(this.items[this.index]);
  //    // this.items[this.index].text = $event;
      
  //   }
  //   this.isDialogEditVisible = false;
  // }



}
