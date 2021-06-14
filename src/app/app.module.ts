import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { ProductService } from './product.service';
import { TokeninterceptorService } from './tokeninterceptor.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductlistComponent,
    NewproductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
    
    
  ],
  providers: [AuthService,AuthGuard,ProductService,
    {
     provide:HTTP_INTERCEPTORS,
     useClass:TokeninterceptorService,
     multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
