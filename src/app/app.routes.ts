import {Routes} from '@angular/router';
import {PostsComponent} from './components/posts/posts.component';
import {PostDetailComponent} from './components/post-detail/post-detail.component';
import {ExploreComponent} from './components/explore/explore.component';
import {P404Component} from './components/p404/p404.component';


export const appRoutes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'post/:id',      component: PostDetailComponent },
  {
    path: 'explore',
    component: ExploreComponent,
    data: { title: 'Explore Posts' }
  },
  { path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  { path: '**', component: P404Component }
];
