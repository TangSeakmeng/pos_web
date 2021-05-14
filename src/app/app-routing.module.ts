import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { MainFrontLayoutComponent } from './layouts/main-front-layout/main-front-layout.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainFrontLayoutComponent,
    canActivate: [AuthenticatedGuard],
    children: [
      { path: '', component: HomePageComponent },
      { path: 'contact-us', component: ContactPageComponent }
    ]
  },
  {
    path: 'login',
    component: MainFrontLayoutComponent,
    children: [
      {
        path: '', component: LoginPageComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
