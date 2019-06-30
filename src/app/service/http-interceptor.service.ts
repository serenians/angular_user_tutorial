import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    var clonedHttpRequest = req.clone();

    clonedHttpRequest.headers.append("AUTHORIZATION_KEY","1231321");
    return next.handle(clonedHttpRequest).pipe(
      catchError(this.errorHandler)
    );    
  }

  errorHandler(error: HttpErrorResponse){
    console.log(error);

    return throwError(error);
  }
}
