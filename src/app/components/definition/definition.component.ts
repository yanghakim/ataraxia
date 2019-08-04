import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-definition",
  templateUrl: "./definition.component.html",
  styleUrls: ["./definition.component.sass"]
})
export class DefinitionComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(["prompt"]);
    }, 10000);
  }
}
