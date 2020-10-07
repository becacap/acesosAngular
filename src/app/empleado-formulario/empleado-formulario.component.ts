import { Component, OnInit } from '@angular/core';
import { Empleado} from '../clases/app.persona';
import { ComunicarEmpleadosService } from '../comunicar-empleados.service';
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

  constructor(comunicar_empleados_servicio: ComunicarEmpleadosService, empleado_service:EmpleadoService) {
    this.comunicar_empleados_servicio=comunicar_empleados_servicio
    this.empleado_service = empleado_service
  }

  ngOnInit(): void {
    this.comunicar_empleados_servicio.setEmpleadoFormulario(this);
    this.cargaJornadas()
  }

  rellenarTabla(empleado: Empleado){
    this.flag=true;
    this.id = empleado.id;
    this.jornada_actual = empleado.jornada.descripcion;
    console.log(this.jornada_actual);
    (<HTMLInputElement>document.getElementById("nombre")).value=empleado.nombre;
    (<HTMLInputElement>document.getElementById("apellidos")).value=empleado.apellidos;
    (<HTMLInputElement>document.getElementById("dni")).value=empleado.dni;
    (<HTMLInputElement>document.getElementById("identificador")).value=empleado.identificador;
    if (empleado.fecha_alta != null )
      (<HTMLInputElement>document.getElementById("fecha_alta")).value=empleado.fecha_alta.toString();
    if (empleado.fecha_baja != null)
      (<HTMLInputElement>document.getElementById("fecha_baja")).value=empleado.fecha_baja.toString();
  }

  cargaJornadas(){
    this.empleado_service.obtenerDatos(this.urlJornadas).then((datos:string) => {
      this.jornadas = datos;
    })
  }

  grabar(idEmpleado, nombre, apellidos, dni, identificador, fecha_alta, fecha_baja, jornada){
    this.empleado_service.obtenerDatos((this.urlJornada + jornada)).then((datos: string) => {
      this.jornada_nueva = datos
      let empleado = new Empleado(idEmpleado, nombre, apellidos, dni, identificador, this.jornada_nueva, fecha_alta, fecha_baja)
      this.empleado_service.grabarEmpleado(this.urlModificar, empleado);
    })
    console.log(jornada)
  }
}
