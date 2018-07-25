import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { MyHomeComponent } from "./my-home/my-home.component";
import { MyMovieComponent } from "./my-movie/my-movie.component";
import { RouterModule } from "../../node_modules/@angular/router";
import { routes } from "./routes";
import { MoviesService } from "services/movies.services";


@NgModule({
  declarations: [
    AppComponent, 
    MyMovieComponent, 
    MyHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
