import { Component, Input, OnInit } from '@angular/core';
import { convertDollar, convertLang } from 'src/app/core/utils';
import { DetailMovie } from 'src/app/pages/movies/model/DetailMovie';
import { Crew } from 'src/app/pages/movies/model/Director';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  @Input() movie!: DetailMovie;
  @Input() director!: Crew[];

  public myFavorites: DetailMovie[] = [];

  ngOnInit(): void {
    this.checkFavorites();
  }

  public formatDate(date: string) {
    const parts = date.split('-');
    const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
    return formattedDate;
  }

  public formatDollar(price: number) {
    return convertDollar(price);
  }

  public formatLang(iso: string) {
    return convertLang(iso);
  }

  public getImage(poster_path: string) {
    return `https://image.tmdb.org/t/p/original` + poster_path;
  }

  private checkFavorites() {
    const favoritesData = localStorage.getItem('favorites');
    this.myFavorites = favoritesData ? JSON.parse(favoritesData) : [];
    const result = this.myFavorites?.filter((x) => x.id === this.movie.id);
    this.movie = result && result.length !== 0 ? result[0] : this.movie;
  }

  public handleFavorites() {
    const favoritesData = localStorage.getItem('favorites');
    this.myFavorites = favoritesData ? JSON.parse(favoritesData) : this.movie;
    const index = this.myFavorites.findIndex(
      (item) => item.id === this.movie.id
    );
    if (index >= 0) {
      this.myFavorites.splice(index, 1);
      this.movie.favorites = false;
    } else {
      this.myFavorites.push(this.movie);
      this.movie.favorites = true;
    }

    localStorage.setItem('favorites', JSON.stringify(this.myFavorites));
  }
}
