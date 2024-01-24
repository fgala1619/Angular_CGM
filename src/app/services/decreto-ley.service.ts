import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import DecretoLey from '../utils/decreto-ley';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DecretoLeyService {

  private url: string =  'http://127.0.0.1:8000/nomencladores/';

  constructor(private http:HttpClient) { }

  //addDecretoLey

  addDecretoLey(decretoL: DecretoLey): Observable<DecretoLey>{
    return this.http.post<DecretoLey>(`${this.url}crear/DecretoLey/`, decretoL);
 }

 //getDecretoLey

 getDecretoLey(): Observable<DecretoLey[]>{
    return this.http.get<DecretoLey[]>(`${this.url}lista/DecretoLey/`);
 }

 //getDecretoLeyById

 getDecretoLeyById(id: number): Observable<DecretoLey>{
   return this.http.get<DecretoLey>(`${this.url}detalle/DecretoLey/${id}/`);
 }

 //updateDecretoLey

 updateDecretoLey(id: number, decretoL: DecretoLey): Observable<DecretoLey>{
   return this.http.put<DecretoLey>(`${this.url}editar/DecretoLey/${id}/`, decretoL);
 }

 //deleteDecretoLey

 deleteDecretoLey(id: number): Observable<DecretoLey>{
   return this.http.delete<DecretoLey>(`${this.url}eliminar/DecretoLey/${id}/`);
 }
}
