import { AuthService } from '@auth0/auth0-angular';
import { Auth } from './../../../../node_modules/@firebase/auth/dist/cordova/src/model/public_types.d';
import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users$: any;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {

    this.auth.user$.subscribe((user) => {
      this.users$ = user
    })

    console.log(this.users$)

  }

}
