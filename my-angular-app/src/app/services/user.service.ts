import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { register } from 'node:module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url1: string = "http://localhost:2000/login";
  url2: string = "http://localhost:2000/register";

  constructor(private http:HttpClient) {

  }

  // loginUser=():Observable<any>=>{
  // return this.http.post(this.url1);
  // }
  // registerUser=():Observable<any>=>{
  //   return this.http.post(this.url2);
  // }
 
  // getUserProfile = (): Observable<any>=> {
  //   return this.http.get(this.url);
  // }
 
}