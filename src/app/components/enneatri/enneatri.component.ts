import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-enneatri",
  templateUrl: "./enneatri.component.html",
  styleUrls: ["./enneatri.component.sass"]
})
export class EnneatriComponent implements OnInit {
  enneatriClass = "enneatri";

  head = "6";
  heart = "4";
  gut = "1";

  constructor(private router: Router) {}

  ngOnInit() {}

  backToPreviews() {
    this.enneatriClass = "enneatri exit";
    setTimeout(() => {
      this.router.navigate(["preview"]);
    }, 1000);
  }
}
