import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

// import { GameComponent } from './game/game.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: UsersComponent},
  // {path: 'getUsers', component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
