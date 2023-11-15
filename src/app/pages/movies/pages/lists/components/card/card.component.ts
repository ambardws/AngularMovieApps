import { Component, Input } from '@angular/core';
import { Movies } from '../../../../model/ListMovie.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  public movie!: Movies;

  public getImage(poster_path: string) {
    return `https://image.tmdb.org/t/p/original` + poster_path;
  }
}
