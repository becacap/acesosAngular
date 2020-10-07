import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DosComponent } from './dos/dos.component';
import { JornadaFormComponent } from './jornada-form/jornada-form.component';
import { JornadaTableComponent } from './jornada-table/jornada-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JornadasComponent } from './jornadas/jornadas.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    DosComponent,
    JornadaFormComponent,
    JornadaTableComponent,
    JornadasComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
