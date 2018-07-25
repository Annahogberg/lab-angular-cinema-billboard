import { Component, OnInit} from "@angular/core";
import { MoviesService } from "../../services/movies.services";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-my-movie",
  templateUrl: "./my-movie.component.html",
  styleUrls: ["./my-movie.component.css"],

})
export class MyMovieComponent implements OnInit {
  movieId: number;
  movie: object;

  constructor(private mS: MoviesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.movieId = params['id']
        this.movie = this.mS.getMovie(this.movieId)
      });
  }
}
