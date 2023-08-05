import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AddnewstudentComponent } from './addnewstudent/addnewstudent.component';
import { AddmarksComponent } from './addmarks/addmarks.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminresultsComponent } from './adminresults/adminresults.component';

import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { UpdatemarksComponent } from './updatemarks/updatemarks.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:"results/:rollnumber",component:ResultsComponent },
  {path:"",component:HomeComponent},
  {path:"admin",component:AdminComponent},
  {path:"addnewstudent",component:AddnewstudentComponent},
  {path:"addmarks",component:AddmarksComponent},
  {path:"profile",component:ProfileComponent},
  {path:"adminresults",component:AdminresultsComponent},
  
  {path:"adminhome",component:AdminhomeComponent},
  {path:"adminprofile",component:AdminprofileComponent},
  {path:"updatemarks",component:UpdatemarksComponent},
  {path:"login",component:LoginComponent},
  {path:"search",component:SearchComponent},
  { path: '**', component:PagenotfoundComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
