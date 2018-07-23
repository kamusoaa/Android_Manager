import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }


  private emitChangeSource = new Subject<any>();
  changeEmitted = this.emitChangeSource.asObservable();

  emitChange(data: {}) {
    this.emitChangeSource.next(data);
  }
}
