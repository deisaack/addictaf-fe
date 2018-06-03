import {Component, OnInit} from '@angular/core';
import {AddModel} from './models/add-model';
import {AddsService} from './services/adds.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  advert: any = new AddModel(0, '', '', '');
  alerts: any[] = [];

  constructor(
    private addsService: AddsService
  ) { }

  ngOnInit() {
    // this.getAdd();
  }

  getAdd() {
    this.addsService.getAdd().subscribe(
      resp => {
        this.advert = resp;
        console.table(this.advert);
      },
      (err: HttpErrorResponse) => {
        if (err.status === 0) {
          this.alerts.unshift('Error in network connection');
          alert('Error In Network connection');
        } else {
        }
      }
    );
  }
}
