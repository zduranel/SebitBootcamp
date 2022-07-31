import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email:new FormControl(null,[Validators.required, Validators.email]),// [Validators.required] -> boş geçilmez
    password:new FormControl(null,[
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(12)
    ]),
  });

  constructor() { }

  ngOnInit(): void {}

  Save() {

  }

}
