import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Auser } from '../models/auser.model';


@Injectable({
  providedIn: 'root'
})
export class AuserServiceService {
  apiUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  addUser(user: Auser): Observable<Auser> {
    let API_URL = `${this.apiUrl}/users`;
    return this.http.post<Auser>(API_URL, user);
  }
  getUser(): Observable<Auser[]> {
    let API_URL = `${this.apiUrl}/users`;
    return this.http.get<Auser[]>(API_URL);

  }
  deleteUser(id: number): Observable<number> {
    let API_URL = `${this.apiUrl}/users`;
    return this.http.delete<number>(`${API_URL}/${id}`)
  }

  getByID(id: number): Observable<Auser> {
    let API_URL = `${this.apiUrl}/users/${id}`;
    return this.http.get<Auser>(API_URL);
  }

  updateUser(id: number,data: Auser): Observable<Auser> {
    let API_URL = `${this.apiUrl}/users`;
    return this.http.put<Auser>(`${API_URL}/${id}`,data)
  }
  getDepratmnet(): Observable<any[]> {
    let API_URL = `http://localhost:3001/department`;
    return this.http.get<any[]>(API_URL);

  }
}
