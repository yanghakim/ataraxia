import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-mbtiblind",
  templateUrl: "./mbtiblind.component.html",
  styleUrls: ["./mbtiblind.component.sass"]
})
export class MbtiblindComponent implements OnInit {
  mbtiblindClass = "mbtiblind";

  constructor(private router: Router) {}

  ngOnInit() {}

  backToPreviews() {
    this.mbtiblindClass = "mbtiblind exit";
    setTimeout(() => {
      this.router.navigate(["preview"]);
    }, 1000);
  }
}
