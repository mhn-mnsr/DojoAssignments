import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { GameComponent } from './game/game.component';
import { ListComponent } from './list/list.component';
import { PlayersComponent } from './players/players.component';
import { StatusComponent } from './status/status.component';
import { ApiService } from './api.service';
// import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPlayerComponent,
    GameComponent,
    ListComponent,
    PlayersComponent,
    StatusComponent,
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
