import { Component, OnInit } from '@angular/core';
import { FichajesService } from '../../fichajes-service/fichajes.service';

@Component({
  selector: 'app-fichajes-filtros',
  templateUrl: './fichajes-filtros.component.html',
  styleUrls: ['./fichajes-filtros.component.css']
})
export class FichajesFiltrosComponent implements OnInit {

  service:FichajesService;

  years:number[];
  meses:string[];

  selectedIndexYear:number;
  selectedIndexMes:number;
  selectedIndexEmpleado:number;

  constructor(service:FichajesService) {
    this.service   = service;

    this.years     = this.service.retrieveYears (10);
    this.meses     = this.service.retrieveMonths();
  }

  ngOnInit(): void {
    
  }

  setSelectedYear     (value: string) { this.selectedIndexYear     = parseInt (value); }
  setSelectedMes      (value: string) { this.selectedIndexMes      = parseInt (value); }
  setSelectedEmpleado (value: string) { this.selectedIndexEmpleado = parseInt (value); }

  refreshData () { 
    this.service.notifyParamsChanged (
      this.years[this.selectedIndexYear],
      this.selectedIndexMes + 1,
      this.service.empleados[this.selectedIndexEmpleado]
    ); 
  }
}

