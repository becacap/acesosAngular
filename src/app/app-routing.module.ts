import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DiaComponent } from './dia/dia.component';
import { DosComponent } from './dos/dos.component';
import { MesComponent } from './mes/mes.component';
import { UnoComponent } from './uno/uno.component';





const routes: Routes = [
  
  {
    path: 'uno',
    component: UnoComponent
  },
  {
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
