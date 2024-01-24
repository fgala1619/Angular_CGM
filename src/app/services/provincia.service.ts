import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Provincia from '../utils/provincia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  private url: string =  'http://127.0.0.1:8000/nomencladores/';

  constructor(private http:HttpClient) { }

  //addProvincia

  addProvincia(provincia: Provincia): Observable<Provincia>{
     return this.http.post<Provincia>(`${this.url}crear/provincia/`, provincia);
  }

  //getProvincia

  getProvincia(): Observable<Provincia[]>{
     return this.http.get<Provincia[]>(`${this.url}lista/provincia/`);
  }

  //getProvinciaById

  getProvinciaById(id: number): Observable<Provincia>{
    return this.http.get<Provincia>(`${this.url}detalle/provincia/${id}/`);
  }

  //updateProvincia

  updateProvincia(id: number, provincia: Provincia): Observable<Provincia>{
    return this.http.put<Provincia>(`${this.url}editar/provincia/${id}/`, provincia);
  }

  //deleteProvincia

  deleteProvincia(id: number): Observable<Provincia>{
    return this.http.delete<Provincia>(`${this.url}eliminar/provincia/${id}/`);
  }
}
