import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgModel } from '@angular/forms';
import { LoginService }      from '../../login.service';
import { Subscription }      from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public userData$: Subscription;
  public userData: any;
  public username: string;
  private componentMessage: string;

  constructor( private loginService: LoginService ) { 

    this.userData$ = this.loginService.userData$.subscribe(
      userData$ => {
        this.userData = userData$

        this.componentMessage = (this.userData == null) 
        ? 'Please Enter your name to Login' 
        : "Hello "+ this.userData + "! Welcome Back";
      }

    )

  }

  ngOnInit() {
    this.username = null;
  }

  ngOnDestroy() {
    //Close the Observable stream
    this.userData$.unsubscribe();
  }

  login(username) {
    this.loginService.login(username);
  }

  logout() {
    this.loginService.logout();

    //Clear input field
    this.username = "";
  }

}