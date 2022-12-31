import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginStatus = localStorage.getItem("user");
  constructor(private authService:AuthService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    console.log(this.loginStatus);
    
  }

  logOut(){
  this.authService.logOut();
  this.toastr.success("Logged Out!")
  this.router.navigateByUrl('/login')
  }
}
