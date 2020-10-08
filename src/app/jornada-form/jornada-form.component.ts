import { Component, OnInit } from '@angular/core';

import { Jornada } from '../clases/app.persona';
import { JornadaServiceService } from '../jornada-service.service';

@Component({
  selector: 'app-jornada-form',
  templateUrl: './jornada-form.component.html',
  styleUrls: ['./jornada-form.component.css']
})
export class JornadaFormComponent implements OnInit {

  servicio: JornadaServiceService
  lunes: string;
  martes: string;
  miercoles: string;
  jueves: string;
  viernes: string;
  descripcion: string;
  especial: number;
  hidden: string;

  bool:boolean;

  urlAddJornadas: string = "http://localhost:8080/api/add-jornada";
  

  nuevaJor: Jornada;
  emptyJor: Jornada;

  constructor(jornadaService: JornadaServiceService) {
    this.servicio = jornadaService;
  }

  ngOnInit(): void {
    this.servicio.setForm(this)
  }

  modificarJornada(jornada: Jornada) {
    (<HTMLInputElement>document.getElementById("Lunes")).value = jornada.lunes;
    (<HTMLInputElement>document.getElementById("Martes")).value = jornada.martes;
    (<HTMLInputElement>document.getElementById("Miercoles")).value = jornada.miercoles;
    (<HTMLInputElement>document.getElementById("Jueves")).value = jornada.jueves;
    (<HTMLInputElement>document.getElementById("Viernes")).value = jornada.viernes;
    (<HTMLInputElement>document.getElementById("Descripcion")).value = jornada.descripcion;
    (<HTMLInputElement>document.getElementById("Especial")).checked = jornada.especial;
    (<HTMLInputElement>document.getElementById("idValue")).value = (jornada.id).toString();
  }
  
  grabarJornada() {
    this.lunes = (<HTMLInputElement>document.getElementById("Lunes")).value;
    this.martes = (<HTMLInputElement>document.getElementById("Martes")).value;
    this.miercoles = (<HTMLInputElement>document.getElementById("Miercoles")).value;
    this.jueves = (<HTMLInputElement>document.getElementById("Jueves")).value;
    this.viernes = (<HTMLInputElement>document.getElementById("Viernes")).value;
    this.descripcion = (<HTMLInputElement>document.getElementById("Descripcion")).value;
    this.especial = +(<HTMLInputElement>document.getElementById("Especial")).checked;
    this.hidden = (<HTMLInputElement>document.getElementById("idValue")).value;

   
    this.nuevaJor = new Jornada(this.hidden, this.descripcion, this.especial, this.lunes, this.martes, this.miercoles, this.jueves, this.viernes);
    this.emptyJor = new Jornada("0", "", "", "", "", "", "", "")

    var a = this;

    this.servicio.grabarDatos(this.urlAddJornadas, this.nuevaJor).then(function(dato:string,){
      a.hidden = "0"
      a.servicio.getTabla().cargarJornada()
      a.modificarJornada(a.emptyJor)
    });
  }
  

}
