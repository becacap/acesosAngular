import { Component, OnInit } from '@angular/core';
import { FichajesService } from '../../fichajes-service/fichajes.service';
import { DataChangedListener } from '../../other/dataChangedListener';

@Component({
  selector: 'app-fichajes-registros',
  templateUrl: './fichajes-registros.component.html',
  styleUrls: ['./fichajes-registros.component.css']
})
export class FichajesRegistrosComponent implements OnInit, DataChangedListener {

  service:FichajesService;

  constructor(service:FichajesService) {
    this.service = service;
    this.service.addDataChangedListener (this);
  }

  ngOnInit(): void {
    
  }

  onFilterRefreshParameters (year:number, mes:string, empleado:string) : void {
    this.service.loadAccesos (year, mes, empleado);
  }
}
