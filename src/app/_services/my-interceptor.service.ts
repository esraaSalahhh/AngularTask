import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyInterceptorService implements HttpInterceptor{

  constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
      const token=localStorage.getItem('token');
      req.headers.append('authorization',token);
      return next.handle(req);
}
  
}
