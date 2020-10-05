import { Component, OnInit } from '@angular/core';
import { Empleado } from '../clases/app.persona';
import { NgForm,NgModel } from '@angular/forms';


@Component({
  selector: 'app-empleado-formulario',
  templateUrl: './empleado-formulario.component.html',
  styleUrls: ['./empleado-formulario.component.css']
})
export class EmpleadoFormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
