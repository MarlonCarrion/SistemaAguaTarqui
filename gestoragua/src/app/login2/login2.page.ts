import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit {
  public ci='0106207038';
  public pass='Mc0967846110';

  cedula;
  clave;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public ingresar(){
    if (this.ci===this.cedula && this.pass===this.clave) {
      return this.router.navigateByUrl('/tabs');
    } else {
      alert("error");
    }
  }
}
