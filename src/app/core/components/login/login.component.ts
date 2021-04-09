import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoggedInUser } from '../../models/auth.model';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public loginEmail = '';
  public loginPassword = '';

  private destroy$ = new Subject<void>();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.loggedInUserState.$
    .pipe(takeUntil(this.destroy$))
    .subscribe((loggedInUser)=> {

      if(loggedInUser?.authToken) {
        console.log('Authenticated!!!', loggedInUser.authToken);
        // TODO: redirect to home page.
        this.router.navigate(['home']);
      }

    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  login(loginForm: NgForm) {
    console.log(loginForm);
    this.authService.login({ email: this.loginEmail, password: this.loginPassword } as LoggedInUser);
  }
}
