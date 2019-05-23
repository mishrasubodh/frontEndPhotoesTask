import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public URL : string = 'https://jsonplaceholder.typicode.com/'
  constructor(
    private http:HttpClient
  ) {

  }
getusers(){
return this.http.get(this.URL+'users')
   }

   getalbums(){
    return this.http.get(this.URL+'albums')
   }

   


}
