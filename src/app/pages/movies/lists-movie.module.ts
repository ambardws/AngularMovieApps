import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsMovieRoutingModule } from './lists-movie-routing.module';
import { ListsComponent } from './pages/lists/lists.component';
import { CardComponent } from './pages/lists/components/card/card.component';
import { DetailMovieComponent } from './pages/detail-movie/detail-movie.component';
import { DescriptionComponent } from './pages/detail-movie/components/description/description.component';
import { PhotosComponent } from './pages/detail-movie/components/photos/photos.component';
import { CastsComponent } from './pages/detail-movie/components/casts/casts.component';
import { FooterComponent } from './pages/detail-movie/components/footer/footer.component';
import { ModalPlayComponent } from './pages/detail-movie/components/modal/modal-play/modal-play.component';

@NgModule({
  declarations: [
    CardComponent,
    ListsComponent,
    DetailMovieComponent,
    DescriptionComponent,
    PhotosComponent,
    CastsComponent,
    FooterComponent,
    ModalPlayComponent,
  ],
  imports: [CommonModule, ListsMovieRoutingModule],
})
export class ListsMovieModule {}
