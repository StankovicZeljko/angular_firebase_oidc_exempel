import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
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
    if (this.auth.isAuthenticated$) {
      this.router.navigate(['/', 'home'])
    }
  }


  loginWithRedirect() {
    this.auth.loginWithRedirect();


  }

  logout() {
    this.auth.logout({ returnTo: '' });
  }

}
