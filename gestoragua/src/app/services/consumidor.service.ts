import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medidor } from '../Model/Medidor';
import { Observable } from 'rxjs';
import { Consumidor } from '../Model/Consumidor';

@Injectable({
    providedIn: 'root'
})

export class ConsumidorService {
    constructor(private http: HttpClient) { }
    getConsumidorList() {
        const path = 'http://192.168.0.100:8080/api/sgap/consumidor';
        return this.http.get<Consumidor[]>(path);
    }

    getConsumidor(id: String): Observable<any> {
        const path = 'http://192.168.0.100:8080/api/sgap/consumidor';
        return this.http.get(`${path}/${id}`);
      }
}   