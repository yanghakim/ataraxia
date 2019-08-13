import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-mbtione",
  templateUrl: "./mbtione.component.html",
  styleUrls: ["./mbtione.component.sass"]
})
export class MbtioneComponent implements OnInit {
  mbtioneClass = "mbtione";

  constructor(private router: Router) {}

  ngOnInit() {}

  backToPreviews() {
    this.mbtioneClass = "mbtione exit";
    setTimeout(() => {
      this.router.navigate(["preview"]);
    }, 1000);
  }
}
