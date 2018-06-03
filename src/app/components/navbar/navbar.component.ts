import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  search = new FormControl();
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  onSearch() {
    const path = '/post/' + this.search;
    this.router.navigate([path], { queryParams: { category: 'trending', price: 'not-cheap' } });
  }

}
