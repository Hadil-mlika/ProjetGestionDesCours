import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  submitted = false;
  loginForm!: FormGroup;
  loginUserData: any;
  constructor(private router: Router, private adminService: AdminService, private formBuilder: FormBuilder) { }

    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email: [''],
        password:[''],
      });

    }
    onSubmit() {
      this.submitted = true;
      console.log(this.loginUserData)
      this.adminService.loginAdmin( this.loginForm.value).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['/admin']);
        }
      )
    }

}
