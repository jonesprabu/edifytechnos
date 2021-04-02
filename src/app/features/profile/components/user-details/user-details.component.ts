import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() user: User = {} as User;

  isFavoriteClass = 'favorite';

  constructor() { }

  // Trigger Multiple times
  // Whenever a change happens to the Input property of this component.
  ngOnChanges() {
    // TODO: OnChanges not triggered when changes happen.
    console.log('UserDetails: OnChanges', this.user.name);
  }

  // Immediately after the ngOnchanges get Called
  ngOnInit(): void {
    console.log('UserDetails: OnInit', this.user.name);

    // Method 1: ngCLass
    // this.isFavoriteClass = this.user.favorite ? 'favorite' : 'not-a-favorite';
  }

  // Trigger Multiple times
  // Whenever a changes happen in the parent component or its sibling component.
  ngDoCheck() {
    console.log('UserDetails: DoCheck', this.user.name);
  }

  // After this component loaded in the parent component
  ngAfterContentInit() {
    console.log('UserDetails: AfterContentInit', this.user.name);
  }

  // Trigger Multiple times
  // Whenever a change happens in the parent component or its sibling component.
  ngAfterContentChecked() {
    console.log('UserDetails: AfterContentChecked', this.user.name);
  }

  // After all its child component loaded.
  ngAfterViewInit() {
    console.log('UserDetails: AfterViewInit', this.user.name);
  }

  // Trigger Multiple times
  // Whenever a change happens in the child component or its sibling component.
  ngAfterViewChecked() {
    console.log('UserDetails: AfterViewChecked', this.user.name);
  }

  // Final call before the component destroy
  ngOnDestroy() {
    console.log('UserDetails: OnDestroy', this.user.name);
  }

  updateFavorite(isFavorite: boolean) {
    console.log("Triggered!!!", isFavorite);
    this.user.favorite = isFavorite;
    this.user = { ... this.user };
    // Method 1: ngCLass
    this.isFavoriteClass = isFavorite ? 'favorite' : 'not-a-favorite';
  }
}

