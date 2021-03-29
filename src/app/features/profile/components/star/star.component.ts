import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() isFavorite = false;

  @Output() onFavoriteChange = new EventEmitter<boolean>();

  constructor() { }

  // Trigger Multiple times
  // Whenever a change happens to the Input property of this component.
  ngOnChanges() {
    // TODO: OnChanges not triggered when changes happen.
    console.log('Star Component: OnChanges - Is favorite - ', this.isFavorite);
  }

  // Immediately after the ngOnchanges get Called
  ngOnInit(): void {
    console.log('Star Component: OnInit - Is favorite - ', this.isFavorite);

    // Method 1: ngCLass
    // this.isFavoriteClass = this.user.favorite ? 'favorite' : 'not-a-favorite';
  }

  // Trigger Multiple times
  // Whenever a changes happen in the parent component or its sibling component.
  ngDoCheck() {
    console.log('Star Component: DoCheck - Is favorite - ', this.isFavorite);
  }

  // After this component loaded in the parent component
  ngAfterContentInit() {
    console.log('Star Component: AfterContentInit - Is favorite - ', this.isFavorite);
  }

  // Trigger Multiple times
  // Whenever a change happens in the parent component or its sibling component.
  ngAfterContentChecked() {
    console.log('Star Component: AfterContentChecked - Is favorite - ', this.isFavorite);
  }

  // After all its child component loaded.
  ngAfterViewInit() {
    console.log('Star Component: AfterViewInit - Is favorite - ', this.isFavorite);
  }

  // Trigger Multiple times
  // Whenever a change happens in the child component or its sibling component.
  ngAfterViewChecked() {
    console.log('Star Component: AfterViewChecked - Is favorite - ', this.isFavorite);
  }

  // Final call before the component destroy
  ngOnDestroy() {
    console.log('Star Component: OnDestroy - Is favorite - ', this.isFavorite);
  }

  changeFavorite($event: Event) {
    this.onFavoriteChange.emit(!this.isFavorite);
  }

}
