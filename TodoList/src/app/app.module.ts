

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';
import { TaskContainerComponent } from './task-container/task-container.component';
import { FormsModule } from '@angular/forms';
import { ActionComponent } from './header/action/action.component';
import { DeleteComponent } from './modal-dialog/delete/delete.component';
import { EditComponent } from './modal-dialog/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskComponent,
    TaskContainerComponent,
    ActionComponent,
    DeleteComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
