import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../../models/post-model';
import {Router} from '@angular/router';
import {PostsService} from '../../services/post.service';
import {baseUrl, liveUrl} from '../../../environments/common';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: PostModel;
  likeColor = 'blue-text';

  constructor(
    private router: Router,
    private postservice: PostsService,
  ) { }

  ngOnInit() {
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

  goPost() {
    const path = '/post/' + this.post.id;
    this.router.navigate([path]);
    // window.location.replace(liveUrl + 'post/' + this.post.id);
  }
}
