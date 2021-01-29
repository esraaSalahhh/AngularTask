import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Person } from '../_model/person';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl='https://mearn-stack-backend-test.herokuapp.com/';

  constructor(private httpClient:HttpClient) { }

  register(person:Person){
  return this.httpClient.post(`${this.baseUrl}user/register`,person)
  }

  login(person:Person){
    return this.httpClient.post(`${this.baseUrl}user/login`,{email:person.email,password:person.password})
  }
  isAuthenticated():boolean{
    if(localStorage.getItem('token')){
      return true;
    }
    else{
      return false;
    }
  }
 
}
