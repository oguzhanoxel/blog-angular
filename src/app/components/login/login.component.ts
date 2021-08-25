import { UserService } from './../../services/user.service';
import { TokenService } from './../../services/token.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  user:User;

  constructor(
    private authService:AuthService,
    private tokenService:TokenService,
    private formBuilder:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      username:["",[Validators.required]],
      password:["",Validators.required]
    });
  }

  login(){
    if(this.loginForm.valid){
      let login:Login = Object.assign({},this.loginForm.value);
      this.authService.login(login).subscribe(response => {
        this.tokenService.saveTokenAccess(response.access)
        this.tokenService.saveTokenRefresh(response.refresh)
        this.tokenService.saveUser(login.username)
        this.router.navigate(['/posts'])
      });
    }else{
      console.log("login form not valid")
    }
  }
}
