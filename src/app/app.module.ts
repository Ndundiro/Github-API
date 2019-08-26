import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { InputSearchFormComponent } from './input-search-form/input-search-form.component';
import { RepositoryComponent } from './repository/repository.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DatePipe } from './date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    InputSearchFormComponent,
    RepositoryComponent,
    NavBarComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
