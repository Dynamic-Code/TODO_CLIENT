import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signInForm: FormGroup
  usrId:string;
  constructor(private authService:AuthService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      username: new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required)
    });
  }

  login() {
    this.authService.login(this.signInForm.value).subscribe(data =>{
      this.toastr.success("Logged In");
      this.router.navigateByUrl('/todo');
    },error =>{
      console.log(error);
      this.toastr.error(error.error);
    });
  }
}



