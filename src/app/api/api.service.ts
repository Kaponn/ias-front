import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  public addUser(user: User): Observable<any> {
    return this.http.post('http://localhost:3000/user', user);
  }

  public getUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/user');
  }

  // public getUsers() {
  //   this.http
  //     .get('http://localhost:3000/user')
  //     .pipe(map(data => {}))
  //     .subscribe(response => console.log(response));
  // }

  public getUser(id: number) {
    const res = this.http.get(`http://localhost:3000/user/${id}`);
    res.subscribe(response => console.log(response));
  }
}
