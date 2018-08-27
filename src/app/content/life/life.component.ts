import { Component, OnInit } from '@angular/core';
import { LifeShare } from 'src/app/model/life-share';
import { LifeService } from 'src/app/service/life.service';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.less']
})
export class LifeComponent implements OnInit {

  private sharedInfo: LifeShare = new LifeShare();

  constructor(private lifeService: LifeService) { }

  ngOnInit() {
  }

  publishShare() {
    this.sharedInfo.content = document.querySelector('#inputStr').value;
    this.sharedInfo.location = 'China ~ Guangzhou';
    this.lifeService.addLife(this.sharedInfo)
      .subscribe(res => {
        if (res.code === 0) {
          // this.postContent = res.data;
        } else {
          console.log('add life share failed');
        }
      });
  }
}
