import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { ProfileDataService } from '../../services/profile-data.service';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.scss']
})
export class ProfilesListComponent implements OnInit, OnDestroy {

  // TODO: Move this to service
  // users: User[] = [] as User[];
  errMsg: String = '';

  // private destroy$ = new Subject<void>();
  // private unSubscribeFetchUserList1: Subscription = {} as Subscription;
  // private unSubscribeFetchUserList2: Subscription = {} as Subscription;

  constructor(
    public profileDataService: ProfileDataService
  ) {  }

  ngOnInit(): void {

    // Api call
    this.profileDataService.fetchUserList();


      // .pipe(takeUntil(this.destroy$))
      // .subscribe(
      //   // Success Callback
      //   (users) => {
      //     this.errMsg = '';
      //     console.log(users);
      //     this.users = users;
      //   },
      //   // Err callback
      //   (err) => {
      //     this.errMsg = "Some technical Difficulties, Please try again later!!!"
      //     console.log(err);
      //   }
      // );

  }

  ngOnDestroy() {
    // this.destroy$.next();
    // this.destroy$.complete();

    // this.unSubscribeFetchUserList1.unsubscribe();
    // this.unSubscribeFetchUserList2.unsubscribe();
  }

}
