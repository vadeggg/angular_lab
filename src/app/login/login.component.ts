import { Component, OnInit } from '@angular/core';
import { LoginService, LoginData } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  username:string = '';

  password:string = '';

  constructor(private loginService:LoginService, private router:Router) { }
  
  ngOnInit(): void {
  }
  
  authUser(){
    // const data : LoginData = {
    //   username:this.username, 
    //   password:this.password
    // }
    console.log(this.password, this.username);
    if(this.username=="Admin" && this.password=="12345"){
      this.loginService.setAuthStatus(true);
      this.router.navigateByUrl('/profile');
    }
    else{
    alert("bad data")
    }
  }

}
