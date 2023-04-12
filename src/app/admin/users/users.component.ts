import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
/* import { User } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users.service'; */

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersList: any;
  users:User [] = [];
  constructor( private usersService:UserService, private route:ActivatedRoute,
    private router : Router ) { }

  ngOnInit(): void {
     let idUser= this.route.snapshot.params['_id'];
        console.log(idUser);

    this.display()
  }
  display(){
    this.usersService.getAllUsers().subscribe(
      res=>{

       this.users=res
      },
      err=>{
        console.log(err);
      }
    )
  }

  delete(user: String) {

    this.usersService.deleteUser(user).subscribe(
      res=>{

        this.display();
      },
      err =>{
        console.log(err);
      }
    )
  }

 /*  deleteUser(userId: string) {
    this.confirmationService.confirm({
      message: 'Do you want to Delete this User?',
      header: 'Delete User',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.usersService.deleteUser(userId).subscribe(
          () => {
            this._getUsers();
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'User is deleted!'
            });
          },
          () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'User is not deleted!'
            });
          }
        );
      }
    });
  }

  updateUser(userid: string) {
    this.router.navigateByUrl(`/admin/add-user/${userid}`);
  }



  private _getUsers() {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
    });
  } */

}
