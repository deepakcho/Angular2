import { Component } from '@angular/core';
import { DrapAndDropDirective } from './directive/drap-and-drop.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isDrag = { val: false };
  positon = 'top';

  setStatus = function (e: any) {
    console.log(e);
    this.isDrag = e;
  };

  setPosition = function (e: any) {
    this.positon = e.dropTo;
  };


}
