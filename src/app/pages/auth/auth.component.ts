import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isAuth = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log('call')
    this.navigateToLogin();
  }

  private navigateToLogin() {
    if(this.isAuth) {
      this.router.navigate(['home/dashboard'])
    } else {
      this.router.navigate(['auth/login'])
    }
  }

}
