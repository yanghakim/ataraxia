import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ValidateService {
  constructor() {}

  validateRegister(user) {
    console.log(user);
    if (
      user.name == undefined ||
      user.email == undefined ||
      user.password == undefined ||
      user.password2 == undefined
    ) {
      return 1;
    } else if (user.password != user.password2) {
      return 2;
    } else if (user.password.length < 6) {
      return 3;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
