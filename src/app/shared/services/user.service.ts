import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "http://localhost:4000/api";
  private getUser= "http://localhost:4000/api/user";

  private deleteUserById = "http://localhost:4000/api/deleteuser/";
  private getUserById = "http://localhost:4000/api/getuser/";
  private updateUserUrl = "http://localhost:4000/api/updateuser/";
  constructor(private http: HttpClient) { }

  register(users: any): Observable<any> {
    const url = `${this.apiUrl}/register`;
    return this.http.post(url, users)
  }

  loginUser(user: any): Observable<any> {
    const url = `${this.apiUrl}/authenticatea`;
    return this.http.post<any>(url, user).pipe(map(data => {
       if (data) {
         return data
       }
     }));
   }
   getAllUsers() {
    const url = `${this.apiUrl}/users`;
    return this.http.get<any>(this.getUser);
   }


  deleteUser(id: String) {
    return this.http.delete<any>(this.deleteUserById  + id);
  }
  getOneUser(id: String) {
    return this.http.get<any>(this.getUserById+ id);
  }
  updateUser(user:User ,id:String){
    console.log(this.updateUserUrl +id)
    return this.http.put<any>(this.updateUserUrl +id, user );
  }
}
