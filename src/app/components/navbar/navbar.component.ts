import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser: User;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getUser()
  }

  isAuthenticated(){
    return this.authService.isAuthenticated()
  }

  logout(){
    this.tokenService.logout();
    this.router.navigate(['/posts'])
  }
  
  getUser(){
    if(this.authService.isAuthenticated()){
      this.userService.retrieveUser(this.tokenService.getUser()).subscribe((response) => {
        this.currentUser = response
      })
    }
  }

}
