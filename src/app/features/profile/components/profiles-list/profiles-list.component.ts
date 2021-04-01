import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.scss']
})
export class ProfilesListComponent implements OnInit {

  // TODO: Move this to service
  users: User[] = require('@mocks/users.json');

  constructor() { }

  ngOnInit(): void {
  }

}
