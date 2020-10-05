import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JornadasComponent } from './jornadas/jornadas.component';
import { EmpleadosComponent } from './empleados/empleados.component';


@NgModule({
  declarations: [
    AppComponent,
    JornadasComponent,
    EmpleadosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
