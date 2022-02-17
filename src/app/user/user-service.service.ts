import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './Model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  apiUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<User> {
    let API_URL = `${this.apiUrl}/users`;
    return this.http.post<User>(API_URL, user);
  }
  getUser(): Observable<User[]> {
    let API_URL = `${this.apiUrl}/users`;
    return this.http.get<User[]>(API_URL);

  }
  deleteUser(id: number): Observable<number> {
    let API_URL = `${this.apiUrl}/users`;
    return this.http.delete<number>(`${API_URL}/${id}`)
  }

  getByID(id: number): Observable<User> {
    let API_URL = `${this.apiUrl}/users/${id}`;
    return this.http.get<User>(API_URL);
  }

  updateUser(id: number,data: User): Observable<User> {
    let API_URL = `${this.apiUrl}/users`;
    return this.http.put<User>(`${API_URL}/${id}`,data)
  }
  getDepratmnet(): Observable<any[]> {
    let API_URL = `http://localhost:3001/department`;
    return this.http.get<any[]>(API_URL);

  }
}
