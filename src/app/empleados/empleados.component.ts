import { Component, OnInit } from '@angular/core';
import { Persona, Estado, Jornada, UsuariosEstados, Empleado } from '../clases/app.persona'
import { ComunicarEmpleadosService } from '../comunicar-empleados.service';
import { EmpleadoService } from '../empleados.service';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  
  saludo: string;
  urlEmpleado: string = "http://localhost:8080/api/empleados"
 
  empleados: string;
  servicio_Comunicacion:ComunicarEmpleadosService;
  servicio_Empleado:EmpleadoService;

  constructor(servicio_Comunicacion:ComunicarEmpleadosService, servicio2:EmpleadoService) {
    this.servicio_Comunicacion=servicio_Comunicacion;
    this.servicio_Empleado=servicio2;
  }

  ngOnInit(): void{
    this.servicio_Comunicacion.setEmpleado(this);
    this.servicio_Empleado.setEmpleados(this);
    this.cargarEmpleado()
  }

  cargarEmpleado() {
    this.servicio_Empleado.obtenerDatos(this.urlEmpleado).then((datos: string) => {
      console.log(datos)
      this.empleados = datos;
    })
  }

  modificar(empleado:Empleado){
       //this.servicio.getEmpleadoFormulario().rellenarTabla(empleado)
       this.servicio_Empleado.getEmpleadosFormulario().rellenarTabla(empleado)
       
  }

  /*
  anadirEmpleado() {

    var sEmpleado = document.createElement("select");
    sEmpleado.id = "sEmpleado"

    if (document.querySelector("#sEmpleado") != null)
      document.querySelector("#sEmpleado").remove


    document.querySelector("#capaSelect").appendChild(sEmpleado)


    this.servicio.grabarEmpleado(this.urlEmpleadoAnadir, this.empleado).then((jornada: string) => {
      console.log(this.empleado);
    })
  }

*/

}
