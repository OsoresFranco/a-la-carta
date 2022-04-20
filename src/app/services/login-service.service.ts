import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post("http://challenge-react.alkemy.org/", user);
  }
}
