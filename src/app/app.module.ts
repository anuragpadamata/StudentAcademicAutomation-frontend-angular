import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultsComponent } from './results/results.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { AdminComponent } from './admin/admin.component';
import { AddnewstudentComponent } from './addnewstudent/addnewstudent.component';
import { AddmarksComponent } from './addmarks/addmarks.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';

import { ProfileComponent } from './profile/profile.component';
import { AdminresultsComponent } from './adminresults/adminresults.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { UpdatemarksComponent } from './updatemarks/updatemarks.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ResultsComponent,
    HomeComponent,
    AdminnavbarComponent,
    AdminComponent,
    AddnewstudentComponent,
    AddmarksComponent,
    AdminheaderComponent,
    
    ProfileComponent,
    AdminresultsComponent,
    
    AdminhomeComponent,
    AdminprofileComponent,
    UpdatemarksComponent,
    LoginComponent,
    SearchComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
