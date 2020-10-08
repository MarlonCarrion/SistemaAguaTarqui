import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medidor } from '../Model/Medidor';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MedidorService {
    constructor(private http: HttpClient) { }
    getMedidorList() {
        const path = 'http://192.168.0.100:8080/api/sgap/medidor';
        return this.http.get<Medidor[]>(path);
    }

    getMedidor(id: String): Observable<any> {
        const path = 'http://192.168.0.100:8080/api/sgap/medidor';
        return this.http.get(`${path}/${id}`);
      }
}   
