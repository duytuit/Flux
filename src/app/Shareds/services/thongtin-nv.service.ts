import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TTnv } from '../models/TTnhanvien';
import data from 'src/assets/path.json';
@Injectable({
  providedIn: 'root'
})
export class ThongtinNVService {
  public ApiTTnv:string=data['path2'];
  constructor(private http: HttpClient) { }
  GetTTnhanvien():Observable<TTnv[]>{
    return this.http.get<TTnv[]>(this.ApiTTnv);
  }
}
