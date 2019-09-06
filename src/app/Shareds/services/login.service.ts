import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import data from 'src/assets/path.json';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  LogIn(userid:string,pwd:string):Observable<any[]>{
    const url = `${data['path1']+"Api/Login"}/${userid}/${pwd}`;
    return this.http.get<any[]>(url);
  }
}
