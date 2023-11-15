import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { BaseService } from 'src/app/core/base-services/services/base.service';

@Component({
  selector: 'app-modal-play',
  templateUrl: './modal-play.component.html',
  styleUrls: ['./modal-play.component.scss'],
})
export class ModalPlayComponent implements OnInit, OnDestroy {
  @Input() video!: number;
  public link!: any;
  private subscribers!: Subscription;
  constructor(
    private sanitizer: DomSanitizer,
    private baseService: BaseService
  ) {}

  ngOnInit(): void {
    this.subscribers = this.baseService
      .getData(this.video.toString() + `/videos`)
      .subscribe((resp) => {
        if (resp) {
          const getTrailer = resp.results.filter(
            (x: any) => x.type === 'Trailer'
          );
          this.link = getTrailer[0].key;
        }
      });
  }

  ngOnDestroy() {
    this.subscribers.unsubscribe();
  }

  public getVideoUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.link}`
    );
  }

  public onClose() {
    this.getVideoUrl();
  }
}
