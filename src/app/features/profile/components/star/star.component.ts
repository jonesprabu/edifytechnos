import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  @Input() isFavorite = false;

  @Output() onFavoriteChanged = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.onFavoriteChanged.emit(!this.isFavorite);
  }

}
