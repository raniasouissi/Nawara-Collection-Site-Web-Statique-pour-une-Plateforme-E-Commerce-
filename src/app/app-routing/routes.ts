import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import {LoginComponent } from '../login/login.component';
import { AboutComponent } from '../about/about.component';
import { ProductComponent } from '../product/product.component';
import { ContactComponent } from '../contact/contact.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'products',     component: ProductComponent },
  { path: 'contact',     component: ContactComponent },
  { path: 'productdetail/:reference',     component: ProductDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
