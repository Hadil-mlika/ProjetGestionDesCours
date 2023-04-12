import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public showPassword: boolean | undefined;
  public showPasswordOnPress: boolean | undefined;
  patient= "assets/images/patient.png"
  submitted = false;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
    private usersService:UserService,
    private route8 : Router,
    private router:Router) { let formControls = {
    name: new FormControl('',[
      Validators.required,

    ]),
    email: new FormControl('',[
      Validators.required,

    ]),
    password: new FormControl('',[
      Validators.required,

    ]),
}
this.registerForm= this.fb.group(formControls)}
get name() { return this.registerForm.get('name') }
get email() { return this.registerForm.get('email') }
get password() { return this.registerForm.get('password') }
  ngOnInit(): void {

  }
  goToLogin(){
    this.route8.navigate(["/login"])
  }

  onSubmit(){
    let data = this.registerForm.value;
    console.log(data);



    console.log(this.registerForm.value);

    this.usersService.register(this.registerForm.value).subscribe(
      res=>{


        this.router.navigate(['/login']);
      },
      err=>{
        console.log(err);
      }
    )

  }
}
