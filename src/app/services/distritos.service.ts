import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Distrito from '../utils/distrito';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistritosService {

  private url: string =  'http://127.0.0.1:8000/nomencladores/';

  constructor(private http:HttpClient) { }

  //addDistrito

  addDistrito(distrito: Distrito): Observable<Distrito>{
    return this.http.post<Distrito>(`${this.url}crear/distrito/`, distrito);
 }

 //getDistrito

 getDistrito(): Observable<Distrito[]>{
    return this.http.get<Distrito[]>(`${this.url}lista/distrito/`);
 }

 //getDistritoById

 getDistritoById(id: number): Observable<Distrito>{
   return this.http.get<Distrito>(`${this.url}detalle/distrito/${id}/`);
 }

 //updateDistrito

 updateDistrito(id: number, distrito: Distrito): Observable<Distrito>{
   return this.http.put<Distrito>(`${this.url}editar/distrito/${id}/`, distrito);
 }

 //deleteDistrito

 deleteDistrito(id: number): Observable<Distrito>{
   return this.http.delete<Distrito>(`${this.url}eliminar/distrito/${id}/`);
 }
}
