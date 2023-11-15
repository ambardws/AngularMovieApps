import { Component, Input, OnInit } from '@angular/core';
import { MoviePhotos } from 'src/app/pages/movies/model/DetailMovie';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent {
  @Input() photos!: MoviePhotos[];

  public getImage(poster_path: string) {
    return `https://image.tmdb.org/t/p/original` + poster_path;
  }
}
