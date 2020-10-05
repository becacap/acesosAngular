import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';


const routes: Routes = [
  {
    path:'empleado',
    component: EmpleadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
