import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DosComponent } from './dos/dos.component';

const routes: Routes = [
  {
    path: 'dos',
    component: DosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
