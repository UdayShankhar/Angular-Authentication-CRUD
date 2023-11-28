// src/app/auth.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjU5MGYyMzMxZGZmZmUxZGFiZWU2MCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MDExNTU1NzAsImV4cCI6MTcwMTMyODM3MH0.G8EcUpyR0A3I1CaFZlvnen5uOcVqNOMPsc4ssJZFc24';

    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
