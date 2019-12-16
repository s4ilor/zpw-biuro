import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { BrowserModule} from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { ItemsComponent } from './items/items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'item/:id', component: ItemDetailsComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
