import { Injectable } from '@angular/core';

@Injectable()
export class DragDropService {

  constructor() { }
  private isDrag:boolean;
  
  public setDragStatus(val:boolean){
    this.isDrag=val;
  }

  public getDragStatus(){
    return this.isDrag;
  }

}
