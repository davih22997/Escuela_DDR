import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, of } from "rxjs";
import { environments } from "src/environments/environtments";
import { User } from "../interfaces/user.interface";


@Injectable({providedIn: 'root'})
export class UsersService {
  private baseUrl:string = environments.baseUrl;

  constructor (private http: HttpClient) {  }

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  addUser(user:User):Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users/${user.id}`, user);
  }

  updateUser(user: User) : Observable<User> {
    if (!user.id) throw Error('User id is required');

    return this.http.patch<User>(`${this.baseUrl}/users/${user.id}`, user);
  }

  deleteUser(user: User) : Observable<boolean> {
    return this.http.delete(`${ this.baseUrl}/users/${user.nick}`)
      .pipe(
        map(resp => true),
        catchError(err => of(false)),
      );
  }

}
