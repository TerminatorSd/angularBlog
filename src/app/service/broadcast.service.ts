import {Injectable, EventEmitter} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

    constructor() {}

    evtBus: EventEmitter<any> = new EventEmitter<any>();
};
