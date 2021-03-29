import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesListComponent } from './components/profiles-list/profiles-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { StarComponent } from './components/star/star.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [ProfilesListComponent, UserDetailsComponent, StarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [
    ProfilesListComponent
  ]
})
export class ProfileModule { }
