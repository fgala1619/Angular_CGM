import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Cpopular from '../utils/cpopular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CpopularService {

  private url: string =  'http://127.0.0.1:8000/nomencladores/';

  constructor(private http:HttpClient) { }

  //addCpopular

  addCpopular(cpopular: Cpopular): Observable<Cpopular>{
    return this.http.post<Cpopular>(`${this.url}crear/cpopular/`, cpopular);
 }

 //getCpopular

 getCpopular(): Observable<Cpopular[]>{
    return this.http.get<Cpopular[]>(`${this.url}lista/cpopular/`);
 }

 //getProvinciaById

 getCpopularById(id: number): Observable<Cpopular>{
   return this.http.get<Cpopular>(`${this.url}detalle/cpopular/${id}/`);
 }

 //updateCpopular

 updateCpopular(id: number, cpopular: Cpopular): Observable<Cpopular>{
   return this.http.put<Cpopular>(`${this.url}editar/cpopular/${id}/`, cpopular);
 }

 //deleteCpopular

 deleteCpopular(id: number): Observable<Cpopular>{
   return this.http.delete<Cpopular>(`${this.url}eliminar/cpopular/${id}/`);
 }
}
