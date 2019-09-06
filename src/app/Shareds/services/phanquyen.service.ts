import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { phanquyen } from '../models/phanquyen';
import data from 'src/assets/path.json';
@Injectable({
  providedIn: 'root'
})
export class PhanquyenService {
  public Api:string=data['path1']+"Api/PhanQuyen";
  constructor(private http: HttpClient) { }

  GetPhanQuyen(nhomkyid:string):Observable<phanquyen[]>{
    const url = `${this.Api+"/GetQuyen"}/${nhomkyid}`;
    return this.http.get<phanquyen[]>(url);
  }
  DeletePhanQuyen(id:string):Observable<any>{
    const url=`${this.Api}/${id}`;
    return this.http.delete(url);
  }
  AddPhanQuyen(phanquyen:any[]):Observable<any[]>{
    return this.http.post<any[]>(this.Api,phanquyen);
  }
  UpdatePhanQuyen(phanquyen:phanquyen):Observable<phanquyen>
  {
    return this.http.put<phanquyen>(this.Api,phanquyen);
  }
}
