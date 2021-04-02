import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../model/user.model';

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

  constructor() { }

  ngOnInit(): void {
  }

  addUser(userForm: NgForm) {

    const newUser: User = {
      name: userForm.controls.name.value,
      dob: userForm.controls.dob.value,
      doj: userForm.controls.doj.value
    } as User;

    console.log('Is form Dirty!', userForm.dirty);
    console.log(newUser);
  }

}
