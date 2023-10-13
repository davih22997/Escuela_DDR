import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { environments } from 'src/environments/environtments';
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn:'root'})
export class AuthService {
  private baseUrl:string = environments.baseUrl;
  private user?: User;

  constructor(private http: HttpClient) {}

  get currentUser():User|undefined {
    return this.user;
  }

  public login(user:User):void {
    localStorage.setItem('token', JSON.stringify(user))
  }

  public logout():void {
    this.user = undefined;
    localStorage.clear();
  }

  public checkAutentication(): Observable<boolean> {
    if (!localStorage.getItem('token'))
      return of(false);

    const token:User = JSON.parse(localStorage.getItem('token')!);

    console.log("Usuario: ")
    console.log({token});

    return this.http.get<User>(`${this.baseUrl}/users/${token.id}`)
      .pipe(
        tap(u => this.user = u),
        map(u => !!u),
        catchError(err => of (false))
      )
  }

}
