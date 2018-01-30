import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListComponent } from './list/list.component';
import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddUserComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
