import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JornadasComponent } from './jornadas/jornadas.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoFormularioComponent } from './empleado-formulario/empleado-formulario.component';
import { JornadaFormComponent } from './jornada-form/jornada-form.component';
import { JornadaTableComponent } from './jornada-table/jornada-table.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    JornadasComponent,
    EmpleadosComponent,
    EmpleadoFormularioComponent,
    JornadaFormComponent,
    JornadaTableComponent,
    JornadasComponent,
    NavBarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
