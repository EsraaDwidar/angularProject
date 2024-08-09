import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { UserCardComponent } from './pages/user-card/user-card.component';
import { UsersdataComponent } from './pages/usersdata/usersdata.component';
import { SearchComponent } from './pages/search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UserCardComponent,
    UsersdataComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
