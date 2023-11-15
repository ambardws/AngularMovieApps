import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/base-services/services/base.service';
import { Subscription } from 'rxjs';
import { DetailMovie, MoviePhotos } from '../../model/DetailMovie';
import { Crew, Director } from '../../model/Director';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss'],
})
export class DetailMovieComponent implements OnInit, OnDestroy {
  public movie!: DetailMovie;
  public director!: Crew[];
  public cast!: Crew[];
  public photos!: MoviePhotos[];
  private subscribers!: Subscription[];
  constructor(
    private baseService: BaseService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.subscribers = [];
    this.getDetail();
    this.getDirector();
    this.getImage();
  }

  ngOnDestroy(): void {
    this.subscribers.forEach((x) => x.unsubscribe);
  }

  private getDetail() {
    const id = this.activatedRoute.snapshot.params['id'];
    const subs = this.baseService.getData(id).subscribe((resp) => {
      if (resp) {
        this.movie = resp;
      }
    });
    this.subscribers.push(subs);
  }

  private getDirector() {
    const id = this.activatedRoute.snapshot.params['id'];
    const subs = this.baseService.getData(`${id}/credits`).subscribe((resp) => {
      if (resp) {
        const director: Director = resp;
        this.cast = resp.cast;
        this.director = director.crew.filter((data: any) => {
          return data.job === 'Director';
        });
      }
    });
    this.subscribers.push(subs);
  }

  private getImage() {
    const id = this.activatedRoute.snapshot.params['id'];
    const subs = this.baseService.getData(`${id}/images`).subscribe((resp) => {
      if (resp) {
        this.photos = resp.backdrops;
      }
    });
    this.subscribers.push(subs);
  }
}
