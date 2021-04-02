import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';

const routes: Routes = [
  {
    path: 'home', component: LayoutComponent,
    children: [
      {
        path: 'profiles', loadChildren: () => import('./features/profile/profile.module')
          .then(m => m.ProfileModule)
      },
      { path: '', redirectTo: 'profiles', pathMatch: 'full' }
    ]
  },


  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
