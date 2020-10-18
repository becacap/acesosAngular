import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { JornadasComponent } from './jornadas/jornadas.component';
import { AppComponent } from './app.component';
import { MesComponent } from './mes/mes.component';
import { DiaComponent } from './dia/dia.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { DosComponent } from './dos/dos.component';
import { UnoComponent } from './uno/uno.component';


const routes: Routes = [
  {
    path:'empleado',
    component: EmpleadosComponent
  },
  {
    path: 'jornadas',
    component: JornadasComponent
    path: 'dos',
    component: DosComponent
  },
  {
    path:'dia',
    component: DiaComponent
  },
  {
    path:'mes',
    component: MesComponent
  },
  {
    path:'calendario',
    component: CalendarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
