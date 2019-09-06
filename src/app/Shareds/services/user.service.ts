import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import data from 'src/assets/path.json';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  public Api:string=data['path1']+"Api/AppUser";
  public Api1:string=this.Api+"/GetAppUser";
  constructor(private http: HttpClient) { }
  GetUser():Observable<User[]>{
    return this.http.get<User[]>(this.Api1);
  }
  DeleteUser(id:string):Observable<any>{
    const url=`${this.Api}/${id}`;
    return this.http.delete(url);
  }
  AddUser(user:User):Observable<User>{
    return this.http.post<User>(this.Api,user);
  }
  UpdateUser(user:User):Observable<User>
  {
    return this.http.put<User>(this.Api,user);
  }
}
