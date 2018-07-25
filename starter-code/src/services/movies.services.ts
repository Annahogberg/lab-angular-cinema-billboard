import { Injectable} from "@angular/core";
import { allMovies } from "sample-movies";

interface Movie {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  genres: Array<string>;
  year: number;
  director: string;
  actors: Array<string>;
  hours: Array<string>;
  room: number;
}


@Injectable()
export class MoviesService{
  movies: Array<Movie> = allMovies;



  getMovies(){return this.movies}

  getMovie(id){
    return this.movies.filter(e => e.id == id)[0];

  }
}
