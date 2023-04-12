import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;
  constructor(private fb: FormBuilder,
    private usersService:UserService,
    private router:Router) {
      let formControls = {
        name: new FormControl('',[
          Validators.required,

        ]),
        email: new FormControl('',[
          Validators.required,

        ]),
        password: new FormControl('',[
          Validators.required,

        ]),
        phone: new FormControl('',[
          Validators.required,

        ]),


      }
      this.addUserForm= this.fb.group(formControls)
     }
     get name() { return this.addUserForm.get('name') }
     get email() { return this.addUserForm.get('email') }
     get password() { return this.addUserForm.get('password') }
     get phone() { return this.addUserForm.get('phone') }


  ngOnInit(): void {
  }
  addUser() {
    let data = this.addUserForm.value;
    console.log(data);



    console.log(this.addUserForm.value);

    this.usersService.register(this.addUserForm.value).subscribe(
      res=>{


        this.router.navigate(['/admin']);
      },
      err=>{
        console.log(err);
      }
    )

  }

}
