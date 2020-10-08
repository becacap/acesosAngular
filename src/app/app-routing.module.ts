import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { JornadasComponent } from './jornadas/jornadas.component';


const routes: Routes = [
  {
    path:'empleado',
    component: EmpleadosComponent
  },
  {
    path: 'jornadas',
    component: JornadasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
