import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private authService:AuthService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.required),
    })
  }

  SignUp() {
   this.authService.register(this.signUpForm.value).subscribe(data =>{
    this.router.navigateByUrl('/todo');
    this.toastr.success("Registered")
   },error =>{
    this.toastr.error(error.error)
   })
  }
  

}
