import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { AppState } from 'src/app/core/models/app-state.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  public userListState: AppState<User[]> =  new AppState<User[]>([]);

  constructor(
    private http: HttpClient
  ) {

    // this.userListState.
  }

  // fetchUserList
  async fetchUserList(): Promise<User[]> {
    const users = await this.http.get<User[]>(`${environment.api_server}/api/users`).toPromise();

    if (users) {
      this.userListState.value = users;
    } else {
      this.userListState.value = [];
    }

    // if(users) {
    //   const products = await this.http.get<User[]>(`http://localhost:3000/products/${users[0].id}`).toPromise();
    // }


    // this.http.get<User[]>('http://localhost:3000/users').subscribe((users) => {
    //   this.http.get<User[]>(`http://localhost:3000/products/${users[0].id}`).subscribe(product => {

    //   });
    // })

    return users;
  }

  async insertUser(user: User): Promise<User> {
    const newUser = await this.http.post<User>(`${environment.api_server}/api/users`, user).toPromise();

    return newUser;
  }

}
