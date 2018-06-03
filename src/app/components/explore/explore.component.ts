import { Component, OnInit } from '@angular/core';
import {PostModel, QueryParams} from '../../models/post-model';
import {PostsService} from '../../services/post.service';
import {HttpErrorResponse} from '@angular/common/http'
import * as _ from 'lodash';
import {ActivatedRoute, Router, RouterState} from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  count: number = undefined;
  nextPageUrl = undefined;
  previousPageUrl = undefined;
  posts: PostModel[] = [];
  alerts: any[] = [];
  selectedPost: PostModel = null;
  orderingOptions = [
    {
      'id': '',
      'text': 'ORDERING'
    },
    {
      'id': '-comments',
      'text': 'Highest Comments'
    },
    {
      'id': 'comments',
      'text': 'Fewest Comments'
    },
    {
      'id': '-likes',
      'text': 'Highest Likes'
    },
    {
      'id': 'likes',
      'text': 'Fewest Likes'
    },
    {
      'id': 'timestamp',
      'text': 'Oldest'
    },
    {
      'id': '-timestamp',
      'text': 'Newest'
    },

  ];
  queryParams = new QueryParams(10);

  constructor(
    private postservice: PostsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  onSelectPost(post: PostModel) {
    this.selectedPost = post;
    this.goPost();
  }

  goPost() {
    const path = '/post/' + this.selectedPost.id;
    this.router.navigate([path], { queryParams: { category: 'trending', price: 'not-cheap' } });
  }
  onSelectOrdering(value) {
    this.queryParams.ordering = value;
    this.getPosts();
  }
  getPosts() {
    this.postservice.getPosts(this.queryParams).subscribe(
      resp => {
        this.posts = resp.results;
        this.nextPageUrl = resp.next;
        this.previousPageUrl = resp.previous;
        this.count = resp.count;
        console.table(this.posts);
      },
      (err: HttpErrorResponse) => {
        if (err.status === 0) {
          this.alerts.unshift('Error in network connection');
          alert('Error');
        } else {
        }
      }
    );
  }

  getNext() {
    if (this.count <= this.posts.length) {
      return;
    }
    this.postservice.getPosts(this.queryParams, this.nextPageUrl).subscribe(
      resp => {
        this.posts = _.concat(this.posts, resp.results);
        this.nextPageUrl = resp.next;
        this.previousPageUrl = resp.previous;
        this.count = resp.count;

      },
      (err: HttpErrorResponse) => {
        if (err.status === 0) {
          this.alerts.unshift('Error in network connection');
          alert('Error');
        } else {
        }
      }
    );
  }
}
