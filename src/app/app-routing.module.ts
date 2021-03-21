import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
     // path: '',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
    // redirectTo: 'folder/Inbox',
    // pathMatch: 'full'
  },
  {
    path: 'folder/:id', 
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'donations',
    loadChildren: () => import('./pages/donations/donations.module').then( m => m.DonationsPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'donation',
    loadChildren: () => import('./pages/custmer/donation/donation.module').then( m => m.DonationPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'info-connect',
    loadChildren: () => import('./pages/custmer/info-connect/info-connect.module').then( m => m.InfoConnectPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
