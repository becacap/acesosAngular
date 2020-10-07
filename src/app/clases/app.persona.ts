import { StringMap } from '@angular/compiler/src/compiler_facade_interface'


export class Persona{
    nombre:string
    edad:number
    constructor(nombre:string,edad:number)
    {
        this.edad=edad
        this.nombre=nombre
    }
}
export class Animal {
    nombre:string
    sonido:string
    constructor(nombre, sonido) {
        this.nombre = nombre;
        this.sonido = sonido;
    }

    emitirSonido():void {
        console.log("el " + this.nombre + " emite el sonido " + this.sonido);
    }
}
export class Perro extends Animal {
    raza:string
    constructor(nombre, sonido, raza) {
        super(nombre, sonido);
        this.raza = raza;
    }

    getNombre() {
        return this.nombre;
    }

    verPerro() {
        console.log("El perro es de raza    " + this.raza);
    }
}

export class Estado {
    id:number
    descripcion:string
    tipo:number
    constructor(id, descripcion, tipo) {
        this.id = id;
        this.descripcion = descripcion;
        this.tipo = tipo;
    }
}


export class Empleado {
    id:number
    nombre:string
    apellidos:string
    dni:string
    identificador:string
    jornada:Jornada
    fecha_alta:Date
    fecha_baja:Date
    constructor(id, nombre, apellidos, dni, identificador, jornada, fecha_alta, fecha_baja) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.identificador = identificador;
        this.jornada = jornada;
        this.fecha_alta = fecha_alta;
        this.fecha_baja = fecha_baja;
    }

}

export class Jornada {
    id:number
    descripcion:string
    especial:boolean
    lunes:string
    martes:string
    miercoles:string
    jueves:string
    viernes:string

    constructor(id, descripcion, especial, lunes, martes, miercoles, jueves, viernes) {
        this.id = id;
        this.descripcion = descripcion;
        this.especial = especial
        this.lunes = lunes
        this.martes = martes
        this.miercoles = miercoles
        this.jueves = jueves
        this.viernes = viernes
    }
}



export class Calendario {
    id:number
    estado:Estado
    fecha:Date
    constructor(id, estado, fecha,) {
        this.id = id;
        this.estado = estado;
        this.fecha = fecha;
    }

}
export class UsuariosEstados {
    id:number
    empleado:Empleado
    estado:Estado
    jornada:Jornada
    calendario:Calendario       
    constructor(id, empleado, estado, jornada, calendario) {
        this.id = id
        this.empleado = empleado
        this.estado = estado
        this.jornada = jornada
        this.calendario = calendario
    }
}

export class Dia{
    dia:number
    diaSemana:number
    semanaMes:number
    estado:number
    constructor(dia:number,diaSemana:number,semanaMes:number,estado:number){
        this.dia = dia;
        this.diaSemana = diaSemana;
        this.semanaMes = semanaMes;
        this.estado = estado;
    }
}

export class Mes{
    mes:number
    nombreMes:string
    datosDias:Array<Dia>
    constructor(mes:number,nombreMes:string,datosDia:Array<Dia>){
        this.mes = mes;
        this.nombreMes = nombreMes;
        this.datosDias = datosDia;
    }
}
