import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MatDialog } from '@angular/material'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  code: string;

  ngOnInit() {
  }
  login() {
    if (this.code == "hi") {
      this.router.navigate(["test"]);
    } else { 
      alert("bad");
    }
  }
}
