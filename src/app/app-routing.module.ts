import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { AuthGuardService } from "./shared/Services/auth-guard.service";
// import { AuthGuardService } from "./shared/Services/auth-guard.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "auth",
    pathMatch: "full",
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
    // canActivate: [AuthGuardService]
  },
  {
    path: "dir",
    loadChildren: () => import("./dir/dir.module").then((m) => m.DirModule),
    canActivate: [AuthGuardService]
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
