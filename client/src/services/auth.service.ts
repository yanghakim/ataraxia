import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) {}

  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post("http://localhost:4200/api/register", user, {
      headers: headers
    });
  }
}
