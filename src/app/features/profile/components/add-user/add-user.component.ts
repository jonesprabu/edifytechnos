import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  MatSnackBar, MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
import { ProfileDataService } from '../../services/profile-data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  public bloodGroups = [
    {
      value: 'A+',
    },
    {
      value: 'A-',
    },
    {
      value: 'B+',
    },
    {
      value: 'B-',
    },
    {
      value: 'O+',
    },
    {
      value: 'O-',
    },
    {
      value: 'AB+',
    },
    {
      value: 'AB-',
    },
  ];

  public user: User = {
    name: 'Test',
    dob: '21/08',
    doj: '21/02/2017',
    bloodGroup: 'A+'
  } as User;

  public loading = false;

  constructor(
    private snackBar: MatSnackBar,
    private profileDataService: ProfileDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async addUser(userForm: NgForm) {

    const newUser: User = {
      name: userForm.controls.name.value,
      dob: userForm.controls.dob.value,
      doj: userForm.controls.doj.value
    } as User;

    try {
      this.loading = true;
      // TODO: Call Api and save the data.
      await this.profileDataService.insertUser(newUser);

      this.loading = false;
      // TODO: Call the sanckbar in the success of api call.
      this.snackBar.open('Added User Successfully!!!', 'close', {
        duration: 3000,
        horizontalPosition: 'end',
        verticalPosition: 'bottom'
      });

      this.router.navigate(['home/profiles/all']);

    } catch (err) {
      this.loading = false;
      // TODO: Call the sanckbar in the err of api call.
      this.snackBar.open('Err occurred please try again !!!', 'close', {
        duration: 3000,
        horizontalPosition: 'end',
        verticalPosition: 'bottom'
      });

    }
  }

}
