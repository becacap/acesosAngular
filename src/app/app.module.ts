import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DosComponent } from './dos/dos.component';
import { UnoComponent } from './uno/uno.component';


@NgModule({
  declarations: [
    AppComponent,
    DosComponent,
    UnoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
