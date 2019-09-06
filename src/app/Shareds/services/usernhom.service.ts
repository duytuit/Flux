import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usernhom } from '../models/usernhom';
import { TTnv } from '../models/TTnhanvien';
import data from 'src/assets/path.json';
@Injectable({
  providedIn: 'root'
})
export class UsernhomService {
  public Api:string=data['path1']+"Api/Data3";
  public Api1:string=this.Api+"/GetUserNhom";
 

  constructor(private http: HttpClient) { }
  
  GetUserNhom():Observable<usernhom[]>{
    return this.http.get<usernhom[]>(this.Api1);
  }

  DeleteUserNhom(id:string):Observable<any>{
    const url=`${this.Api}/${id}`;
    return this.http.delete(url);
  }
  AddUserNhom(usernhom:usernhom):Observable<usernhom>{
    return this.http.post<usernhom>(this.Api,usernhom);
  }
  UpdateUserNhom(usernhom:usernhom):Observable<usernhom>
  {
    return this.http.put<usernhom>(this.Api,usernhom);
  }
}
