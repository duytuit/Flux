import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import data from 'src/assets/path.json';
@Injectable({
  providedIn: 'root'
})
export class PartnoService {
  public Api:string=data['path1']+"AppMeiko/Api/GetAllPartNo";
  public Api1:string=data['path1']+"AppMeiko/Api/GetLotNoByPart";
  public Api2:string=data['path1']+"AppMeiko/Api/GetThicknessByPart";
  
  constructor(private http: HttpClient) { }

  GetLotNoByPart(part:string):Observable<any[]>{
    const url=`${this.Api1}/${part}`;
    return this.http.get<any[]>(url);
  }
  GetThicknessByPart(part:string):Observable<any>{
    const url=`${this.Api2}/${part}`;
    return this.http.get(url);
  }
  GetAllPartNo():Observable<any[]>
  {
    return this.http.get<any[]>(this.Api);
  }
}
