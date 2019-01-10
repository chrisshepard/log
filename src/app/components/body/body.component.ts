import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService }      from '../../login.service';
import { Subscription }      from 'rxjs';
import {faker} from 'faker';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {

  public userData$: Subscription;
  public userData: any;

  private componentMessage: string;

  private avatarURL: string;

  constructor( private loginService: LoginService ) { 

    this.userData$ = this.loginService.userData$.subscribe(
      userData$ => {
        this.userData = userData$

        this.avatarURL = (this.userData == null) 
          ? '../../favicon.ico'
          : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png'

        this.componentMessage = (this.userData == null) 
          ? 'Login to view your information'
          : "This is where " + this.userData + "'s information will show"

      }
    )

  }
  ngOnInit() {
  }

  ngOnDestroy() {
    this.userData$.unsubscribe();
  }

}
