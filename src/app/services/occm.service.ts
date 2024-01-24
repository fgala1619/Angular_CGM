import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import OCCM from '../utils/occm';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OccmService {

  private url: string =  'http://127.0.0.1:8000/nomencladores/';

  constructor(private http:HttpClient) { }

  //addOCCM

  addOCCM(occm: OCCM): Observable<OCCM>{
    return this.http.post<OCCM>(`${this.url}crear/occm/`, occm);
 }

 //getOCCM

 getOCCM(): Observable<OCCM[]>{
    return this.http.get<OCCM[]>(`${this.url}lista/occm/`);
 }

 //getOCCMById

 getOCCMById(id: number): Observable<OCCM>{
   return this.http.get<OCCM>(`${this.url}detalle/occm/${id}/`);
 }

 //updateOCCM

 updateOCCM(id: number, occm: OCCM): Observable<OCCM>{
   return this.http.put<OCCM>(`${this.url}editar/occm/${id}/`, occm);
 }

 //deleteOCCM

 deleteOCCM(id: number): Observable<OCCM>{
   return this.http.delete<OCCM>(`${this.url}eliminar/occm/${id}/`);
 }
}
