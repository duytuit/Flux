import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Pagding } from '../models/pagding';
import { nhomky } from '../models/nhomky';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import data from 'src/assets/path.json';
@Injectable({
  providedIn: 'root'
})
export class NhomkyService {

  public Api:string=data['path1']+"Api/Data2";
  public Api1:string=this.Api+"/GetNhom";
  constructor(private http: HttpClient) { }
  GetNhom():Observable<nhomky[]>{
    return this.http.get<nhomky[]>(this.Api1);
  }
  DeleteNhom(id:string):Observable<any>{
    const url=`${this.Api}/${id}`;
    return this.http.delete(url);
  }
  AddNhom(nhom:nhomky):Observable<nhomky>{
    return this.http.post<nhomky>(this.Api,nhom);
  }
  UpdateNhom(nhom:nhomky):Observable<nhomky>
  {
    return this.http.put<nhomky>(this.Api,nhom);
  }
}
