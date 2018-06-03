import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../../models/post-model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: PostModel;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goPost() {
    const path = '/post/' + this.post.id;
    this.router.navigate([path]);
  }
}
