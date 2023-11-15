import { Component, Input, OnInit } from '@angular/core';
import { Crew } from 'src/app/pages/movies/model/Director';

@Component({
  selector: 'app-casts',
  templateUrl: './casts.component.html',
  styleUrls: ['./casts.component.scss'],
})
export class CastsComponent {
  @Input() cast!: Crew[];
  public getImage(photo: string) {
    return `https://image.tmdb.org/t/p/original` + photo;
  }
}
