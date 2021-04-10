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
  public loading = false;

  private destroy$ = new Subject<void>();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.loggedInUserState.$
      .pipe(takeUntil(this.destroy$))
      .subscribe((loggedInUser) => {

        if (loggedInUser?.authToken) {
          console.log('Authenticated!!!', loggedInUser.authToken);
          // redirect to home page.
          this.router.navigate(['home']);
        }

      })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  async login(loginForm: NgForm) {
    try {
      this.loading = true;
      await this.authService.login({ email: this.loginEmail, password: this.loginPassword } as LoggedInUser);
      this.loading = false;
    } catch (err) {
      loginForm.form.markAsDirty();
      console.log(loginForm);
      this.loading = false;
    }
  }
}
