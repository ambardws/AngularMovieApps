import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './pages/lists/lists.component';
import { DetailMovieComponent } from './pages/detail-movie/detail-movie.component';

const routes: Routes = [
  { path: '', component: ListsComponent, data: { title: 'Popular Movies' } },
  {
    path: 'top-rated',
    component: ListsComponent,
    data: { title: 'Top Rated Movies' },
  },
  {
    path: 'movie-detail/:id',
    component: DetailMovieComponent,
    data: { title: 'Movie Detail' },
  },
  {
    path: 'favorites',
    component: ListsComponent,
    data: { title: 'My Favorites' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListsMovieRoutingModule {}
