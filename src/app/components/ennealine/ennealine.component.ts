import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-ennealine",
  templateUrl: "./ennealine.component.html",
  styleUrls: ["./ennealine.component.sass"]
})
export class EnnealineComponent implements OnInit {
  ennealineClass = "ennealine";

  disint = "2";
  int = "1";
  enneagram = "4";

  constructor(private router: Router) {}

  ngOnInit() {}

  backToPreviews() {
    this.ennealineClass = "ennealine exit";
    setTimeout(() => {
      this.router.navigate(["preview"]);
    }, 1000);
  }
}
