import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-title",
  templateUrl: "./title.component.html",
  styleUrls: ["./title.component.sass"]
})
export class TitleComponent implements OnInit {
  username: string;
  password: string;
  titleStyle = "title";

  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.titleStyle = "title exit";
    setTimeout(() => {
      this.router.navigate(["/definition"]);
    }, 1000);
  }
}
