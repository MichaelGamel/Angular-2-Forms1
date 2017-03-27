import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EqualValidator } from './User/equal-validator.directive';
import { CreateUserComponent } from './User/create-user.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CreateUserComponent, EqualValidator],
  bootstrap: [AppComponent]
})
export class AppModule { }
