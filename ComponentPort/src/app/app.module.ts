import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DrapAndDropDirective } from './directive/drap-and-drop.directive';
import { DragDropService } from './directive/drag-drop.service';

@NgModule({
  declarations: [
    AppComponent,
    DrapAndDropDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [DragDropService],
  bootstrap: [AppComponent]
})
export class AppModule { }
