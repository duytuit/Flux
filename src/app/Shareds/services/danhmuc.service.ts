import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { danhmuc } from '../models/danhmuc';
import data from 'src/assets/path.json';
@Injectable({
  providedIn: 'root'
})
export class DanhmucService {
  
  public Api:string=data['path1']+"Api/DanhMuc";
  public Api1:string= this.Api+"/GetDanhMuc";
  
  constructor(private http: HttpClient) {
   }
  GetDanhMuc():Observable<danhmuc[]>{
    return this.http.get<danhmuc[]>(this.Api1);
  }
  DeleteDanhMuc(id:string):Observable<any>{
    const url=`${this.Api}/${id}`;
    return this.http.delete(url);
  }
  AddDanhMuc(danhmuc:any[]):Observable<any[]>{
    return this.http.post<any[]>(this.Api,danhmuc);
  }
  UpdateDanhMuc(danhmuc:danhmuc):Observable<danhmuc>
  {
    return this.http.put<danhmuc>(this.Api,danhmuc);
  }
}
