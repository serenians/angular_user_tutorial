import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../model/user';
import {catchError} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl ='http://5d107b68bebb9800143d16be.mockapi.io/api/v1';

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl+'/users').pipe(
      catchError(this.errorHandler)
    );
  }

  addNewUser(user:User){
    return this.http.post(this.baseUrl+'/users', user).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    console.log(error);

    return throwError(error);
  }
}
