import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import {NewproductComponent} from './newproduct/newproduct.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{path:"",component:ProductlistComponent},
                         {path:"add",canActivate:[AuthGuard],component:NewproductComponent},
                         {path:"login",component:LoginComponent},
                         {path:"logout",component:ProductlistComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
