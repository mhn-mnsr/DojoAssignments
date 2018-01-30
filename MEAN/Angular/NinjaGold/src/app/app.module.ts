import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoggedDataComponent } from './logged-data/logged-data.component';
import { GoldGeneratorComponent } from './gold-generator/gold-generator.component';

import { GoldService } from './gold.service';

@NgModule({
  declarations: [
    AppComponent,
    LoggedDataComponent,
    GoldGeneratorComponent
  ],
  imports: [
    BrowserModule
  ],
  
  providers: [GoldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
