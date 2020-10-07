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

  setSelectedYear     (selectedIndex: number) { this.selectedIndexYear     = selectedIndex; }
  setSelectedMes      (selectedIndex: number) { this.selectedIndexMes      = selectedIndex; }
  setSelectedEmpleado (selectedIndex: number) { this.selectedIndexEmpleado = selectedIndex; }

  refreshData () { 
    this.service.notifyParamsChanged (
      this.years[this.selectedIndexYear],
      this.meses[this.selectedIndexMes],
      this.service.empleados[this.selectedIndexEmpleado]
    ); 
  }
}

