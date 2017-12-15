import { Component } from '@angular/core';
import { DrapAndDropDirective } from './directive/drap-and-drop.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isDrag={val:false};
  setStatus=function(e:any){
    console.log(e);
    this.isDrag.val=e;
  }
  getStatus=function(){
    return this.isDrag;
  }

}
