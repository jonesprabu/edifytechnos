import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppState } from '../../models/app-state.model';
import { LoggedInUser } from '../../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedInUserState: AppState<LoggedInUser> = new AppState<LoggedInUser>({} as LoggedInUser);

  constructor(private http: HttpClient) { }

  public async login(loggedInUser: LoggedInUser) {
    const loginRes: LoggedInUser = await this.http.post<LoggedInUser>(`${environment.api_server}/auth/login`, { email: loggedInUser.email, password: loggedInUser.password}).toPromise();
    loggedInUser.authToken = loginRes.authToken;
    this.loggedInUserState.value = loggedInUser;
  }


}
