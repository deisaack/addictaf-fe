import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {PostModel, QueryParams} from '../../models/post-model';
import {HttpErrorResponse} from '@angular/common/http';
import {PostsService} from '../../services/post.service';
import {switchMap} from 'rxjs-compat/operator/switchMap';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: PostModel = new PostModel(0, '', '', '', '',
    '', 0, 0, '', '', false);
  alerts = [];
  likeColor = 'blue-text';

  constructor(
    private postservice: PostsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.getPost(id);
  }
  like() {
    this.likeColor = 'yellow-text';
    this.postservice.vote(this.post, 'upvote').subscribe();
    this.post.views += 1;
    this.post.up_votes += 1;
  }
  unlike() {
    this.likeColor = 'red-text';
    this.postservice.vote(this.post, 'down_vote').subscribe();
    this.post.views += 1;
    this.post.down_votes += 1;
  }
  getPost(id) {
    this.postservice.getPost(id).subscribe(
      resp => {
        this.post = resp;
      },
      (err: HttpErrorResponse) => {
        if (err.status === 0) {
          this.alerts.unshift('Error in network connection');
        } else {
        }
      }
    );
  }
}

