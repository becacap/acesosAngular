import { Component, OnInit } from '@angular/core';
import { Jornada } from '../clases/app.persona';
import { JornadaFormComponent } from '../jornada-form/jornada-form.component';
import { JornadaServiceService } from '../jornada-service.service';

@Component({
  selector: 'app-jornada-table',
  templateUrl: './jornada-table.component.html',
  styleUrls: ['./jornada-table.component.css']
})
export class JornadaTableComponent implements OnInit {

  jornadas:string;
  urlJornadas:string = "http://localhost:8080/api/jornadas";
  urlDeleteJornadas:string = "http://localhost:8080/api/deleteJornada/";
  servicio:JornadaServiceService;

  form:JornadaFormComponent

  constructor(jornadaService:JornadaServiceService) { 
    this.servicio = jornadaService;
  }

  ngOnInit(): void {
    this.servicio.setTabla(this)
    this.cargarJornada();
  }

  cargarJornada(){
    this.servicio.obtenerDatos(this.urlJornadas).then((datos:string)=>{
      this.jornadas = datos;
    })
  }

 

  modificarJornada(jn:Jornada)
  {
    this.form = this.servicio.getForm()
    this.form.modificarJornada(jn)
  }

}
