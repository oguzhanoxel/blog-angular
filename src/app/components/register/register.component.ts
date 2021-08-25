import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      username:["",[Validators.required, Validators.minLength(3)]],
      password:["",[Validators.required, Validators.minLength(6)]],
      password2:["",[Validators.required, Validators.minLength(3)]],
      email:["",[Validators.required, Validators.email]],
      first_name:["",[Validators.required, Validators.minLength(3)]],
      last_name:["",[Validators.required, Validators.minLength(3)]],
    });
  }

  register(){
    if(this.registerForm.valid){
      let register = Object.assign({},this.registerForm.value);
      console.log(register)
      this.authService.register(register).subscribe( response => {
        // ???
        this.router.navigate(['/posts'])
      });
    }
  }

}
