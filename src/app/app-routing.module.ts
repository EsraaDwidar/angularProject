import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserCardComponent } from './pages/user-card/user-card.component';
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
  {path : "" , redirectTo : "home" , pathMatch : "full"},
  {path : "home" , component : HomeComponent},
  {path : "usercard/:id" , component : UserCardComponent},
  {path : "SearchComponent/:id" , component : SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
