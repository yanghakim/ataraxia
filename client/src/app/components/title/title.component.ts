import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ValidateService } from "../../../services/validate.service";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-title",
  templateUrl: "./title.component.html",
  styleUrls: ["./title.component.sass"]
})
export class TitleComponent implements OnInit {
  name: String;
  email: String;
  password: String;
  password2: String;

  titleClass = "title";
  loginClass = "title__form";
  registerClass = "title__form hidden";

  loginBtnText = "login";
  registerBtnText = "register";

  constructor(
    private router: Router,
    private validateService: ValidateService,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  toggleView(form) {
    if (form === "login") {
      this.loginClass = "title__form";
      this.registerClass = "title__form hidden";
    } else if (form === "register") {
      this.loginClass = "title__form hidden";
      this.registerClass = "title__form";
    }
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      password2: this.password2
    };

    // Required Fields
    switch (this.validateService.validateRegister(user)) {
      case 1:
        this.registerBtnText = "Please fill out all fields";
        setTimeout(() => {
          this.registerBtnText = "Register";
        }, 4000);
        return false;
      case 2:
        this.registerBtnText = "Mismatched Passwords";
        setTimeout(() => {
          this.registerBtnText = "Register";
        }, 4000);
        return false;
      case 3:
        this.registerBtnText = "Password must be at least 6 characters";
        setTimeout(() => {
          this.registerBtnText = "Register";
        }, 4000);
        return false;
      default:
        break;
    }

    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      console.log("Please enter valid email.");
      return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe(data => {
      console.log(data);
    });

    this.exit();
  }
  /*
  onLoginSubmit() {
    const user = {
      email: this.email,
      password: this.password
    };

    // Required Fields
    switch (this.validateService.validateRegister(user)) {
      case 1:
        this.registerBtnText = "Please fill out all fields";
        setTimeout(() => {
          this.registerBtnText = "Register";
        }, 4000);
        return false;
      case 2:
        this.registerBtnText = "Mismatched Passwords";
        setTimeout(() => {
          this.registerBtnText = "Register";
        }, 4000);
        return false;
      default:
        break;
    }
    this.exit();
  }
*/
  exit() {
    this.titleClass = "title exit";
    setTimeout(() => {
      this.router.navigate(["/definition"]);
    }, 1000);
  }
}
