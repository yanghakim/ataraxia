import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TitleComponent } from "./components/title/title.component";
import { DefinitionComponent } from "./components/definition/definition.component";
import { PromptComponent } from "./components/prompt/prompt.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { PreviewComponent } from "./components/preview/preview.component";
import { EnnealineComponent } from "./components/ennealine/ennealine.component";
import { EnneatriComponent } from "./components/enneatri/enneatri.component";

const routes: Routes = [
  { path: "", component: TitleComponent },
  { path: "definition", component: DefinitionComponent },
  { path: "prompt", component: PromptComponent },
  { path: "profile", component: ProfileComponent },
  { path: "preview", component: PreviewComponent },
  { path: "ennealine", component: EnnealineComponent },
  { path: "enneatri", component: EnneatriComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
