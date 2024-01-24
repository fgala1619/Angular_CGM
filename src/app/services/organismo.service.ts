import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Organismo from '../utils/organismo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganismoService {

  private url: string =  'http://127.0.0.1:8000/nomencladores/';

  constructor(private http:HttpClient) { }

  //addOrganismo

  addOrganismo(organismo: Organismo): Observable<Organismo>{
    return this.http.post<Organismo>(`${this.url}crear/organismo/`, organismo);
 }

 //getOrganismo

 getOrganismo(): Observable<Organismo[]>{
    return this.http.get<Organismo[]>(`${this.url}lista/organismo/`);
 }

 //getOrganismoById

 getOrganismoById(id: number): Observable<Organismo>{
   return this.http.get<Organismo>(`${this.url}detalle/organismo/${id}/`);
 }

 //updateOrganismo

 updateOrganismo(id: number, organismo: Organismo): Observable<Organismo>{
   return this.http.put<Organismo>(`${this.url}editar/organismo/${id}/`, organismo);
 }

 //deleteOrganismo

 deleteOrganismo(id: number): Observable<Organismo>{
   return this.http.delete<Organismo>(`${this.url}eliminar/organismo/${id}/`);
 }
}
