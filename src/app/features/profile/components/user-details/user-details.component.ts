import { Component, Input, OnInit } from '@angular/core';
import {User} from '../../model/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: User = {} as User;

  @Input() value1: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  makeFavorite(isFavorite: boolean){
    console.log("Triggered!!!", isFavorite);
    this.user.favorite = isFavorite;
  }

}

