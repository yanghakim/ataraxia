import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TitleComponent } from "./components/title/title.component";
import { DefinitionComponent } from "./components/definition/definition.component";
import { PromptComponent } from "./components/prompt/prompt.component";
import { ProfileComponent } from "./components/profile/profile.component";

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DefinitionComponent,
    PromptComponent,
    ProfileComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
