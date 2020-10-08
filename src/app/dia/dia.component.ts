import { Component, DebugElement, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { CalendarioEmpleadoService } from '../calendario-empleado.service';
import { Dia, Estado, Jornada, UsuariosEstados } from '../clases/app.persona';

@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.css']
})
export class DiaComponent implements OnInit {

  @Input("dia") dia: Dia;
  @Input("mes") mes: number
  
  @Input("estados") estados:Array<Estado>
  @Input("jornadas") jornadas:Array<Jornada>
  @Input("usuarioEstado") usuarioEstado:Array<UsuariosEstados>

  servicio: CalendarioEmpleadoService;
  urlEstados: string = "http://localhost:8080/api/estados/estados-calendario/"
  estadosPosibles: Array<Estado>
  jornadasPosibles: Array<Jornada>

  seleccionEstado:number
  seleccionJornada:number


  constructor(accesosService: CalendarioEmpleadoService) {
    this.servicio = accesosService;
    
  }

  ngOnInit(): void {

    //
    //console.log(this.dia.dia + " " + this.mes)
    //var dayDate = new Date(this.usuarioEstado[0].calendario.fecha.getFullYear() + "-" + this.mes + "-" + this.dia.dia)
    
    //console.log(dayDate.toString)


    //
    this.seleccionEstado = this.dia.estado;
    this.seleccionJornada = this.dia.usuarioEstado.jornada.id;
  }

  cambiarOpcion(cambio:number){
    //console.log("He cambiado a " + cambio)
    
  }

}
