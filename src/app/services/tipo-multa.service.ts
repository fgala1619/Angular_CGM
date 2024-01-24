import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import TipoMulta from '../utils/tipo-multa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoMultaService {

  private url: string =  'http://127.0.0.1:8000/nomencladores/';

  constructor(private http:HttpClient) { }

  //addTipoMulta

  addTipoMulta(tipoMulta: TipoMulta): Observable<TipoMulta>{
    return this.http.post<TipoMulta>(`${this.url}crear/tipoMulta/`, tipoMulta);
 }

 //getTipoMulta

 getTipoMulta(): Observable<TipoMulta[]>{
    return this.http.get<TipoMulta[]>(`${this.url}lista/tipoMulta/`);
 }

 //getTipoMultaById

 getTipoMultaById(id: number): Observable<TipoMulta>{
   return this.http.get<TipoMulta>(`${this.url}detalle/tipoMulta/${id}/`);
 }

 //updateTipoMulta

 updateTipoMulta(id: number, tipoMulta: TipoMulta): Observable<TipoMulta>{
   return this.http.put<TipoMulta>(`${this.url}editar/tipoMulta/${id}/`, tipoMulta);
 }

 //deleteTipoMulta

 deleteTipoMulta(id: number): Observable<TipoMulta>{
   return this.http.delete<TipoMulta>(`${this.url}eliminar/tipoMulta/${id}/`);
 }
}
