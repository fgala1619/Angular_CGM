import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import TipoOficina from '../utils/tipo-oficina';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoOficinaService {

  private url: string =  'http://127.0.0.1:8000/nomencladores/';

    constructor(private http:HttpClient) { }

     //addTipoOficina

  addTipoOficina(tipo_oficina: TipoOficina): Observable<TipoOficina>{
    return this.http.post<TipoOficina>(`${this.url}crear/tipoOficina/`, tipo_oficina);
 }

 //getTipoOficina

 getTipoOficina(): Observable<TipoOficina[]>{
    return this.http.get<TipoOficina[]>(`${this.url}lista/tipoOficina/`);
 }

 //getTipoOficinaById

 getTipoOficinaById(id: number): Observable<TipoOficina>{
   return this.http.get<TipoOficina>(`${this.url}detalle/tipoOficina/${id}/`);
 }

 //updateTipoOficina

 updateTipoOficina(id: number, tipo_oficina: TipoOficina): Observable<TipoOficina>{
   return this.http.put<TipoOficina>(`${this.url}editar/tipoOficina/${id}/`, tipo_oficina);
 }

 //deleteTipoOficina

 deleteTipoOficina(id: number): Observable<TipoOficina>{
   return this.http.delete<TipoOficina>(`${this.url}eliminar/tipoOficina/${id}/`);
 }
}
