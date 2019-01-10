import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../../login.service';
import { Subscription }      from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public userData$: Subscription;
  public userData: any;

  private componentMessage: string;

  constructor( private loginService: LoginService ) { 

    this.userData$ = this.loginService.userData$.subscribe(
      userData$ => {
        this.userData = userData$;

        this.componentMessage = (this.userData == null) 
        ? '' 
        : this.userData + " Would you like to upgrade to Premium?";
      }
    )

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.userData$.unsubscribe();
  }
}