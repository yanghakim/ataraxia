import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-prompt",
  templateUrl: "./prompt.component.html",
  styleUrls: ["./prompt.component.sass"]
})
export class PromptComponent implements OnInit {
  leftClass = "mbtiprompt";
  rightClass = "enneaprompt";
  buttonClass = "next";

  mbtione = "E";
  mbtitwo = "S";
  mbtithree = "T";
  mbtifour = "J";

  constructor(private router: Router) {}

  ngOnInit() {}

  toggleMOne() {
    if (this.mbtione === "E") {
      this.mbtione = "I";
    } else this.mbtione = "E";
  }
  toggleMTwo() {
    if (this.mbtitwo === "S") {
      this.mbtitwo = "N";
    } else this.mbtitwo = "S";
  }
  toggleMThree() {
    if (this.mbtithree === "T") {
      this.mbtithree = "F";
    } else this.mbtithree = "T";
  }
  toggleMFour() {
    if (this.mbtifour === "J") {
      this.mbtifour = "P";
    } else this.mbtifour = "J";
  }

  onClick() {
    this.leftClass = "mbtiprompt exit";
    this.rightClass = "enneaprompt exit";
    this.buttonClass = "next exit";

    setTimeout(() => {
      this.router.navigate(["/preview"]);
    }, 1000);
  }
}
