import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { thongke } from '../models/thongke';
import data from 'src/assets/path.json';
@Injectable({
  providedIn: 'root'
})
export class ThongkeService {

  constructor(private http: HttpClient) { }

  GetThongKe(dateform:string,dateto:string,trangthai:string):Observable<thongke[]>{
    const url = `${data['path1']+"Api/Flux/GetFlux"}/${dateform}/${dateto}/${trangthai}`;
    return this.http.get<thongke[]>(url);
  }
}
