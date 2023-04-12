import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Admin } from '../models/admin';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  apiUrl = "http://localhost:4000/api";

  constructor(private http: HttpClient) { }



  loginAdmin(admin: any): Observable<any> {
    const url = `${this.apiUrl}/authenticate`;
    return this.http.post<any>(url, admin).pipe(map(data => {
       if (data) {
         return data
       }
     }));
   }

}
