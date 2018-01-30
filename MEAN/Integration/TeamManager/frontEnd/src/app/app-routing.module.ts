import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { StatusComponent } from './status/status.component';
import { ListComponent } from './list/list.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
    {path: 'players', component: PlayersComponent, children: [
        {path: '', redirectTo: 'list', pathMatch: 'full'},
        {path: 'list', component: ListComponent},
        {path:'addPlayer', component:AddPlayerComponent}
    ]},
    {path: 'status', component: StatusComponent, children: [
        {path: '', redirectTo: 'game/1', pathMatch: 'full'},
        {path: 'game/:id', component: GameComponent}
    ]},
    {path: '', pathMatch: 'full', redirectTo: 'players'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }