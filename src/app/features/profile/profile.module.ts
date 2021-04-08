import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesListComponent } from './components/profiles-list/profiles-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { StarComponent } from './components/star/star.component';
import { MatIconModule } from '@angular/material/icon';
import { ProfileRoutingModule } from './profile-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AddUserComponent } from './components/add-user/add-user.component';


@NgModule({
  declarations: [ProfilesListComponent, UserDetailsComponent, StarComponent, AddUserComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: [
    ProfilesListComponent,
    MatFormFieldModule
  ]
})
export class ProfileModule { }
