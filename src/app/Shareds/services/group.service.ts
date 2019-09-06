import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { group } from '../models/group';
import { HttpClient } from '@angular/common/http';
import data from 'src/assets/path.json';
@Injectable({
  providedIn: 'root'
})
export class GroupService {

  public Api:string=data['path1']+"Api/Group";
  public Api1:string=this.Api+ "/GetGroup";
  constructor(private http: HttpClient) { }
  GetGroup():Observable<group[]>{
    return this.http.get<group[]>(this.Api1);
  }
  DeleteGroup(id:string):Observable<any>{
    const url=`${this.Api}/${id}`;
    return this.http.delete(url);
  }
}
