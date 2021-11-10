import { Injectable } from '@angular/core';

export interface LoginData {
  username:string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isAuth = false;
  getAuthStatus(){
    return this.isAuth;
  }
  setAuthStatus(status:boolean){
    this.isAuth = status;
  }
  constructor() { }
}
