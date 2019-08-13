import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-preview",
  templateUrl: "./preview.component.html",
  styleUrls: ["./preview.component.sass"]
})
export class PreviewComponent implements OnInit {
  previewClass = "preview";

  firstName = "yangha";
  lastName = "kim";

  enneagram = "4";
  disint = null;
  int = null;

  page = 1;

  constructor(private router: Router) {}

  ngOnInit() {
    switch (this.enneagram) {
      case "1":
        this.disint = "4";
        this.int = "7";
        break;
      case "2":
        this.disint = "8";
        this.int = "4";
        break;
      case "3":
        this.disint = "9";
        this.int = "6";
        break;
      case "4":
        this.disint = "2";
        this.int = "1";
        break;
      case "5":
        this.disint = "7";
        this.int = "8";
        break;
      case "6":
        this.disint = "3";
        this.int = "9";
        break;
      case "7":
        this.disint = "1";
        this.int = "5";
        break;
      case "8":
        this.disint = "5";
        this.int = "2";
        break;
      case "9":
        this.disint = "6";
        this.int = "3";
        break;
    }
  }

  switchPages(page) {
    switch (page) {
      case 1:
        return (this.page = 1);
      case 2:
        return (this.page = 2);
      case 3:
        return (this.page = 3);
      case 4:
        return (this.page = 4);
      case 5:
        return (this.page = 5);
    }
  }

  ennealine() {
    this.previewClass = "preview exit";
    setTimeout(() => {
      this.router.navigate(["ennealine"]);
    }, 1000);
  }

  enneatri() {
    this.previewClass = "preview exit";
    setTimeout(() => {
      this.router.navigate(["enneatri"]);
    }, 1000);
  }

  mbtione() {
    this.previewClass = "preview exit";
    setTimeout(() => {
      this.router.navigate(["mbtione"]);
    }, 1000);
  }

  mbtitwo() {
    this.previewClass = "preview exit";
    setTimeout(() => {
      this.router.navigate(["mbtitwo"]);
    }, 1000);
  }

  mbtiblind() {
    this.previewClass = "preview exit";
    setTimeout(() => {
      this.router.navigate(["mbtiblind"]);
    }, 1000);
  }
}
