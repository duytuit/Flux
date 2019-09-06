import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { flux } from '../models/flux';
import data from 'src/assets/path.json';
@Injectable({
  providedIn: 'root'
})
export class FluxService {

  selectedFlux:flux;
  
  public Api:string= data['path1']+"Api/Data1";

  constructor(private http: HttpClient) { }
  GetGroup():Observable<any[]>{
    const url = this.Api+"/GetGroup";
    return this.http.get<any[]>(url);
  }
  GetGroupFlux(groupid:string):Observable<flux[]>{
    const url = `${this.Api+"/GetGroupFlux"}/${groupid}`;
    return this.http.get<flux[]>(url);
  }
  DeleteFlux(id:string):Observable<any>{
    const url=`${this.Api}/${id}`;
    return this.http.delete(url);
  }
  AddFlux(flux:any[]):Observable<any[]>{
    return this.http.post<any[]>(this.Api,flux);
  }
  UpdateFlux(flux: flux): Observable<flux> {
    return this.http.put<flux>(this.Api,flux);
  }
}
