import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {PostsService} from '../../services/post.service';
import {PostModel, QueryParams} from '../../models/post-model';
import 'rxjs/add/observable/of';
import * as _ from 'lodash';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  count = undefined;
  nextPageUrl = undefined;
  previousPageUrl = undefined;
  posts: PostModel[] = [];
  alerts: any[] = [];
  selectedPost: PostModel = null;
  selectedValue: string;
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
  queryParams = new QueryParams(10, this.orderingOptions[0]['id']);




  constructor(
    private postservice: PostsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.queryParams.limit = params.limit;
        this.queryParams.ordering = params.ordering;
        this.queryParams.search = params.search;
        this.queryParams.filter = params.filter;
        this.queryParams.tags = params.tags;
        this.queryParams.category = params.category;
        this.queryParams.offset = params.offset;
      });
    console.clear();
    console.log(this.queryParams);
    this.getPosts();
  }

  typeaheadChanged() {
    this.queryParams.search = this.selectedValue;
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
