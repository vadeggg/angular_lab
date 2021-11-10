import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  exitProfile(){
    this.loginService.setAuthStatus(false);
    this.router.navigateByUrl('/')
  }

}
