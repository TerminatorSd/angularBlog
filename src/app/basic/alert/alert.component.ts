/**
 * @author shaoDong
 * @email scut_sd@163.com
 * @create date 2018-10-21 10:34:33
 * @modify date 2018-10-21 10:34:33
 * @desc alert
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class AlertComponent implements OnInit {

  private _text = 'alert';
  private _type = 'success';

  @Input()
  get type() {
    return this._type;
  }
  set type(value: string) {
    this._type = value;
    this.setClassMap();
  }

  constructor() { }

  ngOnInit() {
  }

}
