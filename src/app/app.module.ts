import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DosComponent } from './dos/dos.component';
import { UnoComponent } from './uno/uno.component';
import { FichajesFiltrosComponent } from './fichajes/componentes/fichajes-filtros/fichajes-filtros.component'
import { FichajesRegistrosComponent } from './fichajes/componentes/fichajes-registros/fichajes-registros.component';
import { FichajesContainerComponent } from './fichajes/componentes/fichajes-container/fichajes-container.component';


@NgModule({
  declarations: [
    AppComponent,
    DosComponent,
    UnoComponent,
    FichajesFiltrosComponent,
    FichajesRegistrosComponent,
    FichajesContainerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
