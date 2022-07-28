

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class MyservicesService {
  constructor(private http: HttpClient) {}
  url = 'localhost:4000/users';



  addUser(data: any): Observable<any> {
    return this.http.post<any>( this.url, data);
  }

  userList(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  tradeList(): Observable<any> {
    return this.http.get<any>(`/trade`);
  }

  labelList(tradeId: number): Observable<any> {
    return this.http.get<any>(`/label/${tradeId}`);
  }

  updateSyllabus(id: string, body: any): Observable<any> {
    return this.http.put<any>(`/syllabus/${id}`, body);

  }

 

  deleteSyllabus(id: string): Observable<any> {
    return this.http.delete(`/syllabus/${id}`);
  }

  detailSyllabus(id: string): Observable<any> {
    return this.http.get(`/syllabus/${id}`);
  }
}
