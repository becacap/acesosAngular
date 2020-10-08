import { Component, Input, OnInit } from '@angular/core';
import { Empleado, Jornada } from '../clases/app.persona';
import { NgForm,NgModel } from '@angular/forms';
import { EmpleadosComponent } from '../empleados/empleados.component';
import { stringify } from 'querystring';
import { ComunicarEmpleadosService } from '../comunicar-empleados.service';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { EmpleadoService } from '../empleados.service';




@Component({
  selector: 'app-empleado-formulario',
  templateUrl: './empleado-formulario.component.html',
  styleUrls: ['./empleado-formulario.component.css']
})

export class EmpleadoFormularioComponent implements OnInit {
  id:number
  urlModificar:string = "http://localhost:8080/api/modificarEmpleados"
  urlJornadas: string =  "http://localhost:8080/api/jornadas"
  urlJornada: string = "http://localhost:8080/api/jornada/"
  empleado_service: EmpleadoService
  comunicar_empleados_servicio: ComunicarEmpleadosService
  jornadas: string
  jornada_nueva: string
  jornada_actual: string
  flag:boolean = false;

  servicio_Comunicacion:ComunicarEmpleadosService;
  servicio_Empleado: EmpleadoService;
  empleado:Empleado;
  empleados:string
  id:number;
  urlAñadirEmpleado: string = "http://localhost:8080/api/modificarEmpleados";
  urlJornadas: string = "http://localhost:8080/api/jornadas"
  urlJornadaId:string = "http://localhost:8080/api/jornada/"
  urlEmpleado: string = "http://localhost:8080/api/empleados"
  jornada:Jornada;
  jornadas:string;
  jornada_nueva:string;
  flagModificar:number = 0
  jornada_seleccionada:string

  constructor(servicio_Comunicacion:ComunicarEmpleadosService, servicio_Empleado:EmpleadoService ) {
    this.servicio_Comunicacion=servicio_Comunicacion;
    this.servicio_Empleado=servicio_Empleado;
   }

  ngOnInit(): void {
    this.servicio_Empleado.setEmpleadosFormulario(this);
    this.obtenerJornadas();
  }

  
  rellenarTabla(empleado: Empleado){
    this.flagModificar=1;
    console.log(empleado)
    this.id=empleado.id;
    (<HTMLInputElement> document.getElementById("nombre")).value=empleado.nombre;
    (<HTMLInputElement> document.getElementById("apellidos")).value=empleado.apellidos;
    (<HTMLInputElement> document.getElementById("dni")).value=empleado.dni;
    (<HTMLInputElement> document.getElementById("identificador")).value=empleado.identificador;
    if(empleado.fecha_alta != null){
      (<HTMLInputElement> document.getElementById("fecha_alta")).value=empleado.fecha_alta.toString();
    }
    if(empleado.fecha_baja != null){
      (<HTMLInputElement> document.getElementById("fecha_baja")).value=empleado.fecha_baja.toString();
    }
    this.jornada_seleccionada = empleado.jornada.descripcion;
  }

  obtenerValores(idEmpleado,nombre,apellidos,dni,identificador,jornadaId,fecha_alta,fecha_baja){
    this.servicio_Empleado.obtenerDatos((this.urlJornadaId + jornadaId)).then((datos: string) => {
      console.log(datos)
      this.jornada_nueva = datos
      let empleado = new Empleado(idEmpleado, nombre, apellidos, dni, identificador, this.jornada_nueva, fecha_alta, fecha_baja)
      console.log(empleado)
      this.servicio_Empleado.grabarEmpleado(this.urlAñadirEmpleado, empleado).then((datos:string) => {
        this.servicio_Empleado.obtenerDatos(this.urlEmpleado).then((datos:string) => {
          this.servicio_Comunicacion.getEmpleado().empleados=datos;
        })
      });
      
    });
  }


  obtenerJornadas(){
    this.servicio_Empleado.obtenerDatos(this.urlJornadas).then((datos:string) => {
      this.jornadas = datos
    });
    console.log(JSON.stringify(this.jornadas))
  }

}
