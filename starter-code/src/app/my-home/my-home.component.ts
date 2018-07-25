import { Component } from "@angular/core";
import { MoviesService } from "../../services/movies.services";

@Component({
  selector: "app-my-home",
  templateUrl: "./my-home.component.html",
  styleUrls: ["./my-home.component.css"],

})
export class MyHomeComponent {
  moviesList: Array<object> = [];
  constructor(public mS: MoviesService) {
    this.moviesList = this.mS.getMovies();
  }

}
