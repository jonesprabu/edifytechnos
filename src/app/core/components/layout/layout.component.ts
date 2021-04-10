import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  showFiller = false;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  logut() {
    this.authService.logout();
  }

}
