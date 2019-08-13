import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TitleComponent } from "./components/title/title.component";
import { DefinitionComponent } from "./components/definition/definition.component";
import { PromptComponent } from "./components/prompt/prompt.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { PreviewComponent } from "./components/preview/preview.component";
import { EnnealineComponent } from "./components/ennealine/ennealine.component";
import { EnneatriComponent } from "./components/enneatri/enneatri.component";
import { MbtioneComponent } from "./components/mbtione/mbtione.component";
import { MbtitwoComponent } from "./components/mbtitwo/mbtitwo.component";
import { MbtiblindComponent } from "./components/mbtiblind/mbtiblind.component";

const routes: Routes = [
  { path: "", component: TitleComponent },
  { path: "definition", component: DefinitionComponent },
  { path: "prompt", component: PromptComponent },
  { path: "profile", component: ProfileComponent },
  { path: "preview", component: PreviewComponent },
  { path: "ennealine", component: EnnealineComponent },
  { path: "enneatri", component: EnneatriComponent },
  { path: "mbtione", component: MbtioneComponent },
  { path: "mbtitwo", component: MbtitwoComponent },
  { path: "mbtiblind", component: MbtiblindComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
