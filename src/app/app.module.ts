import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionBlockComponent } from './components/introduction-block/introduction-block.component';
import { HeaderFrontComponent } from './shared/header-front/header-front.component';
import { FooterFrontComponent } from './shared/footer-front/footer-front.component';
import { MainFrontLayoutComponent } from './layouts/main-front-layout/main-front-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserGridContainerComponent } from './components/user-grid-container/user-grid-container.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionBlockComponent,
    HeaderFrontComponent,
    FooterFrontComponent,
    MainFrontLayoutComponent,
    HomePageComponent,
    ContactPageComponent,
    NotFoundPageComponent,
    UserCardComponent,
    UserGridContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
