import {BehaviorSubject} from 'rxjs';

export class LoginService {

  private _userData$: BehaviorSubject<any>;
  public _userData: any;

  constructor() { 
    this._userData$ = new BehaviorSubject(null);
  }

  get userData$() {
    return this._userData$.asObservable();
  }

  login(username) {
    this._userData$.next(username);
  }

  logout() {
    this._userData$.next(null);
  }
}