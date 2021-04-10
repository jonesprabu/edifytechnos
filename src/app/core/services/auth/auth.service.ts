import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AppState } from '../../models/app-state.model';
import { LoggedInUser } from '../../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedInUserState: AppState<LoggedInUser> = new AppState<LoggedInUser>({} as LoggedInUser);

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public async login(loggedInUser: LoggedInUser): Promise<LoggedInUser> {
    const loginRes: LoggedInUser = await this.http.post<LoggedInUser>(`${environment.api_server}/auth/login`, { email: loggedInUser.email, password: loggedInUser.password }).toPromise();
    loggedInUser.authToken = loginRes.authToken;
    loggedInUser.name = loginRes.name;
    // Storing in sessionStorage to make it available even after page refresh.
    sessionStorage.setItem('authToken', '' + loginRes.authToken);
    sessionStorage.setItem('userName', loginRes.name);
    this.loggedInUserState.value = loggedInUser;
    return loginRes;
  }

  public logout() {
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userName');
    this.loggedInUserState.value = {} as LoggedInUser;
    this.router.navigate(['login']);
  }


}
