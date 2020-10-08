import { DecimalPipe } from '@angular/common';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export interface Consumo {
    cedula_consumidor: String;
    fecha: String;
    accesorio: DecimalPipe;
    contribucion: DecimalPipe;
    estado: String;
    exceso: DecimalPipe;
    lectura: number;
    multa: DecimalPipe;
    precio: DecimalPipe;
    sobrexceso: DecimalPipe;
}