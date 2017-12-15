import { Directive, HostListener, Input,Output, ElementRef, EventEmitter } from '@angular/core';
import { DragDropService } from './drag-drop.service'; 
import { OnChanges, DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
  selector: '[appDrapAndDrop]'
})
export class DrapAndDropDirective implements DoCheck{

  @Input('draggedItem') draggedItem: string;
  @Input('sourceId') sourceId:string;
  @Input('targetId') targetId:string;
  @Input('sourceName') sourceName:string;
  @Input('DropTarget') DropTarget:any;
  @Output() DragStart=new EventEmitter();


  DragDropService:DragDropService;
  private ele: any;
  constructor(ElementRef:ElementRef) {
    this.ele = ElementRef;

  }

  @HostListener('dragstart', ['$event']) dragStartListener($event: any) {
    $event.dataTransfer.setData("text", this.sourceId);
    $event.target.classList.add('dragged-item');
    this.DragStart.emit({'val':true});

  }

  @HostListener('dragend', ['$event']) dragEndListener($event: any) {
    $event.target.classList.remove('dragged-item');
    $event.target.classList.remove('drag-target');
    $event.target.classList.remove('drag-over');
    this.DragStart.emit({'val':false});
    $event.preventDefault();
  }

  @HostListener('dragleave', ['$event']) dragLeaveListener($event: any) {
    $event.target.classList.remove('drag-over');
    $event.preventDefault();
  }


  @HostListener('drop', ['$event']) dropHandler($event: any) {
    $event.preventDefault();
    var data = $event.dataTransfer.getData("text");
    $event.target.classList.remove('drag-over');
    console.log(this.sourceId,data);
  }


  @HostListener('dragover', ['$event']) dragOverHandler($event: any) {
    $event.preventDefault();
    $event.target.classList.add('drag-over');
  }

  // @HostListener('click', ['$event']) clickHandler($event) {
  //   alert(this.sourceId);
  // }

  ngDoCheck(){
    //console.log(this.DropTarget,this.sourceId,this.ele.nativeElement);
  console.log('this.DropTarget.isDrag',this.DropTarget);
    if(this.DropTarget.val){
      this.ele.nativeElement.classList.add('drag-target');
    }else{
      this.ele.nativeElement.classList.remove('drag-target');
    }
  }

}
