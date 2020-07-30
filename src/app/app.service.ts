import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  test = [];
  constructor(private http: HttpClient) {}
  url: string = 'http://localhost:3000/data';
  getUser() {
    return this.http.get<User[]>(this.url);
  }
  addUser(data) {
    return this.http.post<User[]>(this.url, data);
  }
}
