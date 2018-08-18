import { Component, OnInit } from '@angular/core';

import asdf from 'markdown-sd';

@Component({
  selector: 'app-manage-post-detail',
  templateUrl: './manage-post-detail.component.html',
  styleUrls: ['./manage-post-detail.component.less']
})
export class ManagePostDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(asdf);
  }
  
  doTransfer() {
    const inputStr = document.querySelector('#input').value;
    console.log(asdf(inputStr));
  }
}
