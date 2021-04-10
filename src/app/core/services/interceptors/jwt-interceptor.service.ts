import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Jwt Authentication Strategy
    let token: string | null = this.authService.loggedInUserState.value.authToken;

    if(!token && sessionStorage.getItem('authToken')){
      const loggedInUser = this.authService.loggedInUserState.value;
      loggedInUser.authToken = sessionStorage.getItem('authToken');
      loggedInUser.name = ''+sessionStorage.getItem('userName');

      token = loggedInUser.authToken;
      this.authService.loggedInUserState.value = loggedInUser;
    }

    console.log(req.url, token);
    if (token && req.url.startsWith(`${environment.api_server}/api`)) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(req);
  }
}
