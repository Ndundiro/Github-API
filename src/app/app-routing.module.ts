import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { RepositoryComponent } from "./repository/repository.component"



const routes: Routes = [
 { path: "main-page", component: MainPageComponent },
 { path: "repository", component:RepositoryComponent},
 { path: '', redirectTo:"/main-page", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
