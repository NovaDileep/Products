import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(req:any,nxt:any){
   let authService=this.injector.get(AuthService);
   let tokenizedRequest=req.clone(
     {setHeaders:{
       Authorization:`Bearer ${authService.getToken()}`
     }
    }
   )
   return nxt.handle(tokenizedRequest);
  }
}
