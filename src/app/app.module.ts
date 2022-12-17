import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './servies/product.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Config } from './shared/config';
import { CustomConfig } from './shared/customconfig';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    HomeComponent,
    ContactComponent,
    ProductDetailComponent,
    AboutComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule ,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [
    ProductService,
    
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
