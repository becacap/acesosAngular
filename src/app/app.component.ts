import { Component } from '@angular/core';
import {Persona,Estado, UsuariosEstados, Dia} from './clases/app.persona'
import {AccesosServiceService} from './accesos-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    saludo:string;
    servicio:AccesosServiceService;
    urlEstados:string="http://localhost:8080/verEstados"
    estados:string
    dia:Dia

  constructor(accesosService:AccesosServiceService){
    this.saludo=accesosService.texto;
    this.servicio=accesosService;
    this.dia = new Dia(7,2,4,new Estado(5,"LABORABLE",1));
  }

  cargarEstados(){
      this.servicio.obtenerDatos(this.urlEstados).then((datos:string)=>{
          console.log(datos)
          this.estados=datos;
          
      })
  }


}

