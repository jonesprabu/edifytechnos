import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerInterceptorService implements HttpInterceptor {

  constructor(
    private snackBar: MatSnackBar,
    private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError((err, res): Observable<HttpEvent<any>> => {
        let error = '';
        if (err.status === 401) {
          error = err.error.message;
          this.snackBar.open(error, 'close');
          this.router.navigate(['login']);
        } else if (err.status === 404) {
          error = 'Content Unavailable!';
        } else if (err.status === 500) {
          error = 'Some technical issue! Please try again after sometimes.';
        } else if (err.status === 503) {
          error = 'Communication issue! Please try again.';
        } else {
          error = 'Something went wrong! Please try again.';
        }

        // const error = err.message || err.statusText;
        this.snackBar.open(error, 'close');
        return of(err); // throwError(error);
      }));
  }
}
