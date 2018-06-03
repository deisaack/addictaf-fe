import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../../models/post-model';
import {AddModel} from '../../models/add-model';

@Component({
  selector: 'app-top-add',
  templateUrl: './top-add.component.html',
  styleUrls: ['./top-add.component.scss']
})
export class TopAddComponent implements OnInit {
  @Input() add: AddModel;

  constructor() { }

  ngOnInit() {
  }

}
