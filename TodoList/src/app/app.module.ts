import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TodoitemComponent } from './todoitem/todoitem.component'

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoitemComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
