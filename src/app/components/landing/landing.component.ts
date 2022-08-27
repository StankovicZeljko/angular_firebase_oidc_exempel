import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

import { Component, OnInit } from '@angular/core';



interface Item {
  email: string,
  role: string
};

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {



  constructor(private auth: AuthService, private router: Router) {


  }

  ngOnInit(): void {

  }

}
