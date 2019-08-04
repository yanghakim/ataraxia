import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ScrollEventModule } from "ngx-scroll-event";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TitleComponent } from "./components/title/title.component";
import { DefinitionComponent } from "./components/definition/definition.component";
import { PromptComponent } from "./components/prompt/prompt.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { PreviewComponent } from './components/preview/preview.component';
import { EnnealineComponent } from './components/ennealine/ennealine.component';
import { EnneatriComponent } from './components/enneatri/enneatri.component';
import { MbtioneComponent } from './components/mbtione/mbtione.component';
import { MbtitwoComponent } from './components/mbtitwo/mbtitwo.component';
import { MbtiblindComponent } from './components/mbtiblind/mbtiblind.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DefinitionComponent,
    PromptComponent,
    ProfileComponent,
    PreviewComponent,
    EnnealineComponent,
    EnneatriComponent,
    MbtioneComponent,
    MbtitwoComponent,
    MbtiblindComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ScrollEventModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
