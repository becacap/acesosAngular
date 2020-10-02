import { Component } from '@angular/core';
import {Persona,Estado, UsuariosEstados} from './clases/app.persona'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:string = 'Titulo del curso angular';

  personas:Persona[] = new Array();

  verTexto:boolean = false;


  cambiaTexto() {
    this.personas.push(new Persona("pepe", 56))
    this.personas.push(new Persona("luis", 28))
    this.personas.push(new Persona("federico", 70))
    this.title = "nuevo texto"
    this.verTexto = true
  }



 paises = ["españa", "francia", "alemania"];







 ver(valor = "pepe") {
    console.log(valor);


}

  saludar = () => {




    

    this.obtenerDatos("http://localhost:8080/estados").then( (estados:Estado[])=>{





        var componente = document.querySelector("#estados");

        var optionCabecera = document.createElement("option");
        optionCabecera.text = "selecciona estado..."

        componente.appendChild(optionCabecera);

        estados.forEach(function (estado) {
            var option = document.createElement("option");
            option.text = estado.descripcion;
            componente.appendChild(option)

        })

        var table = document.createElement("table");
        table.classList.add("table")

        table.classList.add("table-stripped")
        //table.border=1;
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        td1.appendChild(document.createTextNode("identificador"));
        td2.appendChild(document.createTextNode("descripcion"));
        tr.appendChild(td1)
        tr.appendChild(td2)
        table.appendChild(tr);
        estados.forEach(function (estado, contador:number) {

            let tr = document.createElement("tr");

            if (contador % 2 == 0)
                tr.classList.add("text-success");
            else
                tr.classList.add("text-danger");


            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            td1.appendChild(document.createTextNode(estado.id.toString()));
            td2.appendChild(document.createTextNode(estado.descripcion));
            tr.appendChild(td1)
            tr.appendChild(td2)
            table.appendChild(tr);
        })

        document.querySelector("#capa").appendChild(table);
    })
}


 grabarDatos(url, dato) {

    return new Promise(function (resolve, reject) {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        fetch(url,
            {
                "headers": headers,
                "method": "POST",
                "body": JSON.stringify(dato)
            }).then(response => response.json())
            .then(data => { return resolve(data) });
    })
}

 obtenerDatos(url) {

    return new Promise(function (resolve, reject) {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        fetch(url, { "headers": headers }).then(response => response.json())
            .then(data => { return resolve(data) });
    })
}



 cargaDatos() {
    this.obtenerDatos("http://localhost:8080/api/calendario/usuariosEstados").then(function (usuariosEstados:UsuariosEstados[]) {
        console.log(usuariosEstados)
        var tabla = document.querySelector("#tablaUE");
        usuariosEstados.forEach(function(usuarioEstado){
            var tr= document.createElement("tr");
            var td1=document.createElement("td")
            var td2=document.createElement("td")
            var td3=document.createElement("td")
            var td4=document.createElement("td")
            var td5=document.createElement("td")
            td1.appendChild(document.createTextNode(`${usuarioEstado.empleado.nombre} ${usuarioEstado.empleado.apellidos}`))
            td2.appendChild(document.createTextNode(`${usuarioEstado.jornada.descripcion}`))
            td3.appendChild(document.createTextNode(`${usuarioEstado.estado.descripcion}`))
            td4.appendChild(document.createTextNode(`${usuarioEstado.calendario.fecha}`))
            var botonModificar=document.createElement("button")
            botonModificar.classList.add("bg-success");
            var botonBorrar= document.createElement("button")
            botonBorrar.classList.add("bg-danger")
            td5.appendChild(botonModificar)
            td5.appendChild(botonBorrar)
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            tr.appendChild(td4)
            tr.appendChild(td5)
            tabla.appendChild(tr)
        })

    })


}








}
