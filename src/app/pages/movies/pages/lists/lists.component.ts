import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BaseService } from 'src/app/core/base-services/services/base.service';
import { Movies } from '../../model/ListMovie.model';
import { ResponeModel } from 'src/app/core/model/responeModel';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit, OnDestroy {
  public movieList: Movies[] = [];
  private subscribers!: Subscription[];
  public query!: string;
  public title!: string;
  public page: number = 1;
  constructor(
    private baseService: BaseService,
    private router: Router,
    private activatedRouted: ActivatedRoute
  ) {
    this.query = this.router.url.includes('top-rated')
      ? 'top_rated'
      : 'popular';
  }

  ngOnInit(): void {
    this.subscribers = [];
    const getTitle = this.activatedRouted.data.subscribe((data) => {
      this.title = data['title'];
    });

    this.subscribers.push(getTitle);

    this.getList();
  }

  ngOnDestroy(): void {
    this.subscribers.forEach((x) => x.unsubscribe);
  }

  private getList() {
    if (this.router.url.includes('favorites')) {
      const favoritesData = localStorage.getItem('favorites');
      this.movieList = favoritesData ? JSON.parse(favoritesData) : null;
    } else {
      const subs = this.baseService
        .getData(this.query, this.page)
        .subscribe((resp: ResponeModel) => {
          if (resp) {
            this.movieList.push(...resp.results);
          }
        });

      this.subscribers.push(subs);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    // Periksa apakah sudah scroll sampai bawah
    if (this.isScrolledToBottom()) {
      // Lakukan sesuatu ketika sudah scroll sampai bawah
      this.page++;
      this.getList();
    }
  }

  isScrolledToBottom(): boolean {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    // Deteksi jika sudah scroll sampai bawah dengan toleransi 10 piksel
    return scrollHeight - scrollTop <= clientHeight + 10;
  }
}
