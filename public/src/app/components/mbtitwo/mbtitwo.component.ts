import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-mbtitwo",
  templateUrl: "./mbtitwo.component.html",
  styleUrls: ["./mbtitwo.component.sass"]
})
export class MbtitwoComponent implements OnInit {
  mbtitwoClass = "mbtitwo";

  constructor(private router: Router) {}

  ngOnInit() {}

  backToPreviews() {
    this.mbtitwoClass = "mbtitwo exit";
    setTimeout(() => {
      this.router.navigate(["preview"]);
    }, 1000);
  }
}
