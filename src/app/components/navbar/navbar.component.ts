
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }


  loginWithRedirect() {
    this.auth.loginWithRedirect().subscribe(() => {
      this.router.navigate(['home'])
    });
  }

  logout() {
    this.auth.logout({
      returnTo: ''
    });
  }

}
