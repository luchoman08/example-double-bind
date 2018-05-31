import { Component, OnInit } from '@angular/core';
import { MovieEx } from '../models/movie';
import { Actor } from '../models/actor';
@Component({
  selector: 'app-movies-example',
  templateUrl: './movies-example.component.html',
  styleUrls: ['./movies-example.component.css']
})
export class MoviesExampleComponent implements OnInit {
  movie: MovieEx;
  constructor() {
    this.movie = new MovieEx();
    }

  newActor(actor: Actor) {
    this.movie.cast.push(actor);
  }
  ngOnInit() {
  }

}
