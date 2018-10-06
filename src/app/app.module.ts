import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBoxComponent } from './add/search-box/search-box.component';
import { ShowlistComponent } from './add/showlist/showlist.component';
import { ShowService } from './show.service';
import { ShowCardComponent } from './add/showlist/show-card/show-card.component';
import { HomelistComponent } from './home/homelist/homelist.component';
import { HomecardComponent } from './home/homelist/homecard/homecard.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AddComponent,
    SearchComponent,
    NavbarComponent,
    SearchBoxComponent,
    ShowlistComponent,
    ShowCardComponent,
    HomelistComponent,
    HomecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     FormsModule
  ],
  providers: [ ShowService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
