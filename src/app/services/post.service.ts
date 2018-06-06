import { Injectable } from '@angular/core';
import {authenticatedHttpOptions, baseUrl} from '../../environments/common';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {PostModel, QueryParams} from '../models/post-model';

@Injectable()
export class PostsService {
  private postsUrl = baseUrl + 'posts/post/';

  constructor(
    private http: HttpClient,
  ) { }

  vote(post: PostModel, action: string) {
    const url = this.postsUrl + post.id + '/' + action + '/';
    return this.http.put(url, '', authenticatedHttpOptions);
  }
  getPost(id: string): Observable<any> {
    return this.http.get(this.postsUrl + id + '/');
  }

  deletePost(id: string): Observable<any> {
    const postUrl = this.postsUrl + id + '/';
    return this.http.delete(this.postsUrl);
  }

  updatePost(id: string, data: object): Observable<any> {
    const postUrl = this.postsUrl + id + '/';
    return this.http.patch(this.postsUrl, data, authenticatedHttpOptions);
  }

  getPosts(params?: QueryParams, dataUrl?: string): Observable<any> {
    if (dataUrl) {
      return this.http.get<any>(dataUrl, authenticatedHttpOptions);
    }
    let q = '';

    if (params) {
      q = this._processParams(params);
    }
    const url = this.postsUrl + q;
    return this.http.get<any>(url, authenticatedHttpOptions);
  }

  _processParams(params: QueryParams) {
    var q = '?';
    for (let key in params) {
      if (params[key] !== undefined && params[key] !== null && params[key].length >= 1) {
      //   params[key] = '';
      // } else {
        q = q + key + '=' + params[key] + '&';
      }
    }
    console.log('Params are ', params);
    console.log(q);
    return q;
  }
}
