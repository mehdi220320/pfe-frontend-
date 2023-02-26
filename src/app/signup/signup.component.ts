import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {User} from "../models/user.model";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    const formValue=form.value;
    user:new User(
      formValue['firstname'],
        formValue['lastname'],
        formValue['username'],
        formValue['email'],
        formValue['password']
  );
    this.router.navigate(['/signin']);
  }




}
