import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md/index';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftcolComponent } from './components/leftcol/leftcol.component';
import { RightcolComponent } from './components/rightcol/rightcol.component';
import { MaincolComponent } from './components/maincol/maincol.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import {PostsService} from './services/post.service';
import {HttpClientModule} from '@angular/common/http';
import {TimeAgoPipe} from 'time-ago-pipe';
import { TopAddComponent } from './components/top-add/top-add.component';
import {AddsService} from './services/adds.service';
import {ComponentLoaderFactory} from 'angular-bootstrap-md/utils/component-loader/component-loader.factory';
import {PositioningService} from 'angular-bootstrap-md/utils/positioning/positioning.service';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { ExploreComponent } from './components/explore/explore.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { P404Component } from './components/p404/p404.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
// import {ReactiveFormsModule} from '@angular/forms';
import RavenErrorHandler from './raven-config.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LeftcolComponent,
    RightcolComponent,
    MaincolComponent,
    PostComponent,
    PostsComponent,
    TimeAgoPipe,
    TopAddComponent,
    ExploreComponent,
    PostDetailComponent,
    P404Component
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule,
    HttpClientModule,
    InfiniteScrollModule,
    // ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    PostsService, AddsService, ComponentLoaderFactory, PositioningService,
    ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
