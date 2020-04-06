import { Component, OnInit } from '@angular/core';
import { BroadcastService } from './service/broadcast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'app';
  msgs = [];
  life = 2000;

  constructor(private bcService: BroadcastService) {}

  ngOnInit() {
    this.bcService.evtBus.subscribe(msgs => {
      this.msgs = msgs;
    });
  }
}
