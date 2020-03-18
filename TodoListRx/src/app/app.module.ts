import { TodoServiceService } from './services/todo-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TodoitemComponent } from './todoitem/todoitem.component';
import { HeaderComponent } from './header/header.component';
import { ModalDeleteComponent } from './modal-dialogs/delete/modal-delete.component'
import { ModalDialogService } from './services/modal-dialog.service';
import { ModalEditComponent } from './modal-dialogs/edit/modal-edit.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoitemComponent,
    HeaderComponent,
    ModalDeleteComponent,
    ModalEditComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [TodoServiceService,
  ModalDialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
