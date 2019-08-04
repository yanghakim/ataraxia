import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-definition",
  templateUrl: "./definition.component.html",
  styleUrls: ["./definition.component.sass"]
})
export class DefinitionComponent implements OnInit {
  leftClass = "definition__left";
  rightClass = "definition__right";

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.leftClass = "definition__left exit";
      this.rightClass = "definition__right exit";
    }, 9000);
    setTimeout(() => {
      this.router.navigate(["prompt"]);
    }, 10000);
  }
}
