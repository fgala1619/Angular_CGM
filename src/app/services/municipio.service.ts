import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Municipio from '../utils/municipio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  private url: string =  'http://127.0.0.1:8000/nomencladores/';

  constructor(private http:HttpClient) { }

  //addMunicipio

  addMunicipio(municipio: Municipio): Observable<Municipio>{
    return this.http.post<Municipio>(`${this.url}crear/municipio/`, municipio);
 }

 //getMunicipio

 getMunicipio(): Observable<Municipio[]>{
    return this.http.get<Municipio[]>(`${this.url}lista/municipio/`);
 }

 //getMunicipioById

 getMunicipioById(id: number): Observable<Municipio>{
   return this.http.get<Municipio>(`${this.url}detalle/municipio/${id}/`);
 }

 //updateMunicipio

 updateMunicipio(id: number, municipio: Municipio): Observable<Municipio>{
   return this.http.put<Municipio>(`${this.url}editar/municipio/${id}/`, municipio);
 }

 //deleteMunicipio

 deleteMunicipio(id: number): Observable<Municipio>{
   return this.http.delete<Municipio>(`${this.url}eliminar/municipio/${id}/`);
 }
}
