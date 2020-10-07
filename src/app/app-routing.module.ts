import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DosComponent } from './dos/dos.component';
import { JornadasComponent } from './jornadas/jornadas.component';

const routes: Routes = [
  {
    path: 'dos',
    component: DosComponent
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
