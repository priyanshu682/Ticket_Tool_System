import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  get<T>(URL: string): Observable<T> {
    return this.http.get<T>(URL)
  }
  post<T>(URL: string, body: any): Observable<T> {
    return this.http.post<T>(URL, body)
  }
  put<T>(URL: string, body: any): Observable<T> {
    return this.http.put<T>(URL, body)
  }
  delete<T>(URL: string): Observable<T> {
    return this.http.delete<T>(URL)
  }

}
