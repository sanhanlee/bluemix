import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ChatComponent } from './custom/chat.component';

const routes: Routes= [
  {
    path: '',
    component: ChatComponent
  }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes), HttpModule, JsonpModule ],
  declarations: [ AppComponent, ChatComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
