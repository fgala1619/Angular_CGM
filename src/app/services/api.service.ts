import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  constructor(
    private http: HttpClient
  ) { }

  postService(paramsReq: any): Observable<T>{

    const {url, body} = paramsReq;

     return this.http.post<T>(url, body)
     .pipe(map(res => res),
     catchError(this.handleError)
     );
  }

  private handleError(err: HttpErrorResponse){
    console.log(err.error);

    return throwError(() => err);
  }
}
