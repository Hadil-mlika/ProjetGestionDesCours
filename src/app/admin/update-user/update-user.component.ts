import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updateUserForm: FormGroup;
  user:any;
  _id:any;
  constructor(  private fb: FormBuilder,
    private route:ActivatedRoute,
    private router : Router,
    private usersService:UserService) {    let formControls = {
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
      this. updateUserForm = this.fb.group(formControls)}

      get name() { return this.updateUserForm.get('name') }
      get email() { return this.updateUserForm.get('email') }
      get password() { return this.updateUserForm.get('password') }
      get phone() { return this.updateUserForm.get('phone') }

  ngOnInit(): void {

    let idUser= this.route.snapshot.params['id'];
    console.log(idUser);




    this.usersService.getOneUser(idUser).subscribe(
      res=>{
        let user = res;
        console.log(user);



        this.updateUserForm.patchValue({
      name : user.name,

      email: user.email,
      password: user.password,
      phone: user.phone,




    })



      },
      err=>{
        console.log(err);
      }
    )
  }
  updateUser() {
    let data = this.updateUserForm.value;
     console.log(data);

    let idUser = this.route.snapshot.params['id'];
     let user= new User(data.name,data.email,data.password,data.phone);

    console.log(user);




    this.usersService.updateUser(user,idUser).subscribe(
      res =>{
        let user = res;
        console.log(user)

        this.router.navigate(['/admin']);
      },
      err=>{
        console.log(err);
      }
    )

  }

}
