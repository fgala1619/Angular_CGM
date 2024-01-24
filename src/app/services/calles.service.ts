import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Calle from '../utils/calle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallesService {

  private url: string =  'http://127.0.0.1:8000/nomencladores/';

  constructor(private http:HttpClient) { }

  //addCalle

  addCalle(calle: Calle): Observable<Calle>{
    return this.http.post<Calle>(`${this.url}crear/calle/`, calle);
 }

 //getCalle

 getCalle(): Observable<Calle[]>{
    return this.http.get<Calle[]>(`${this.url}lista/calle/`);
 }

 //getCalleById

 getCalleById(id: number): Observable<Calle>{
   return this.http.get<Calle>(`${this.url}detalle/calle/${id}/`);
 }

 //updateCalle

 updateCalle(id: number, calle: Calle): Observable<Calle>{
   return this.http.put<Calle>(`${this.url}editar/calle/${id}/`, calle);
 }

 //deleteCalle

 deleteCalle(id: number): Observable<Calle>{
   return this.http.delete<Calle>(`${this.url}eliminar/calle/${id}/`);
 }
}
