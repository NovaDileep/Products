import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

     title:String="Product Management";
     constructor(public auth:AuthService,private router:Router) { }
     
  ngOnInit(): void {
  }
  logoutuser(){
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }
}
