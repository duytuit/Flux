import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { menu } from '../models/menu';
import data from 'src/assets/path.json';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public Api:string=data['path1']+"Api/Menu";
  public Api1:string=this.Api+"/GetMenu";
  public Api2:string=this.Api+"/GetMenuTest";
  constructor(private http: HttpClient) { }

  GetMenu():Observable<menu[]>{
    return this.http.get<menu[]>(this.Api1);
  }
  GetMenutest():Observable<menu[]>{
    return this.http.get<menu[]>(this.Api2);
  }
  DeleteMenu(id:string):Observable<any>{
    const url=`${this.Api}/${id}`;
    return this.http.delete(url);
  }
  AddMenu(menu:menu):Observable<menu>{
    return this.http.post<menu>(this.Api,menu);
  }
  UpdateNhom(nhom:menu):Observable<menu>
  {
    return this.http.put<menu>(this.Api,nhom);
  }
}
