import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ProfilesListComponent } from './components/profiles-list/profiles-list.component';

const routes: Routes = [
  { path: 'all', component: ProfilesListComponent },
  { path: 'add', component: AddUserComponent },
  { path: '', redirectTo: 'all', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
