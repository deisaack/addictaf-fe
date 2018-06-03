import { Injectable } from '@angular/core';
import {authenticatedHttpOptions, baseUrl} from '../../environments/common';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {QueryParams} from '../models/post-model';

@Injectable()
export class AddsService {
  private addsUrl = baseUrl + 'core/get-advert/';


  constructor(
    private http: HttpClient,
    // const q = '?ordering=' + params.ordering + '&filter=' + params.filter + '&limit=' +
    //   params.limit + '&search=' + params.search + '&offset=' + params.offset;
  ) { }

  getAdd() {
    return this.http.get(this.addsUrl);
    // return Node
  }
}

