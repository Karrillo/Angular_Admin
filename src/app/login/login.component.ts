import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plugings();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit() {
    init_plugings();
  }

  login() {
    console.log('caca');
    this.router.navigate([ '/dashboard' ]);
  }

}
