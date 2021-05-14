import { action, computed, observable } from "mobx";
import { Injectable } from "@angular/core";
import { IUser } from "../models/IUser.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from 'rxjs/operators';
import { Router } from "@angular/router";

@Injectable({providedIn:'root'})
export class UserStore {

  @observable public isLoading: boolean = false;
  @observable public user: IUser | undefined;

  endpoint = 'http://localhost:3000/api';
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    })
  };

  httpHeaderWithToken = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': 'Bearer ' + this.userJSONMapping()?.token
    })
  };

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {

  }

  userJSONMapping() {
    const result = localStorage.getItem("user_auth") ? JSON.parse(localStorage.getItem("user_auth") || '{}') : undefined;
    return result;
  }

  @computed
  get isLoggedIn(): boolean {
    const user = localStorage.getItem('user_auth');
    return user != null ? true : false;
  }

  @action
  login(email: string, password: string) {
    this.httpClient.post<IUser>(this.endpoint + '/users/login', JSON.stringify({ email, password }), this.httpHeader)
      .pipe(
        retry(1),
        catchError(this.processError)
      ).subscribe((result) => {
        localStorage.setItem("user_auth", JSON.stringify(result));
        this.router.navigate(['/']);
      });
  }

  @action
  getUsers(): Observable<IUser> {
    return this.httpClient.get<IUser>(this.endpoint + '/users', this.httpHeaderWithToken)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  @action
  addUser(data: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(this.endpoint + '/users/create', JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }  

  // @action
  // updateUser(id, data): Observable<User> {
  //   return this.httpClient.put<User>(this.endpoint + '/users/' + id, JSON.stringify(data), this.httpHeader)
  //   .pipe(
  //     retry(1),
  //     catchError(this.processError)
  //   )
  // }

  // @action
  // deleteUser(id){
  //   return this.httpClient.delete<User>(this.endpoint + '/users/' + id, this.httpHeader)
  //   .pipe(
  //     retry(1),
  //     catchError(this.processError)
  //   )
  // }

  processError(err: { error: { message: string; }; status: any; message: any; }) {
    let message = '';
    if(err.error instanceof ErrorEvent) {
     message = err.error.message;
    } else {
     message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
 }

}
