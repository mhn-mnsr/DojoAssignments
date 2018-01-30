import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  // buttonValue = ["on", "off", "on", "off", "off", "on","off", "on", "off", "off"];
  buttonColor = [true, true, true, true, true, true, true, true, true, true];
  switchColor(idx) {
    this.buttonColor[idx] = !this.buttonColor[idx];
  }
}
