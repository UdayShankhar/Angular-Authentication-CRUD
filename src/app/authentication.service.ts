import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = environment.apiUrl;

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjU5MGYyMzMxZGZmZmUxZGFiZWU2MCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MDExNTU1NzAsImV4cCI6MTcwMTMyODM3MH0.G8EcUpyR0A3I1CaFZlvnen5uOcVqNOMPsc4ssJZFc24'
  });

  constructor(private http: HttpClient) { }
  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}users/allUsers`);
  }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/addUser`, user);
  }

  editUser(userId: string, user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/edit/${userId}`, user);
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/find/${userId}`);
  }
}
