import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm!: FormGroup;
  loginUserData: any;

  constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password:[''],
    });
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.loginUserData)
    this.userService.loginUser( this.loginForm.value).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['/home']);
      }
    )
  }

}
