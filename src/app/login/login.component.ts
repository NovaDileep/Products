import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
//import { FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  User={username:'',
  password:''};
  constructor(private auth:AuthService,private router:Router) { }
  
  ngOnInit(): void {
  }
  userlogin(){
     this.auth.userlogin(this.User)
     .subscribe(
       res=>{
         localStorage.setItem('token',res.token)
         this.router.navigate(['/'])
       },
       err => {
        console.log(err);
        this.router.navigate(['/'])
      }
     )
  }
}
