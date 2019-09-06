import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernhomService } from '../../services/usernhom.service';
import { usernhom } from '../../models/usernhom';
import { phanquyen } from '../../models/phanquyen';
import { PhanquyenService } from '../../services/phanquyen.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showDropDown: boolean = false;
  getUserNhom: usernhom[];
  getphanquyen: phanquyen[] = [];
  getall: phanquyen[];
  MenuCha: phanquyen[];
  main: boolean = true;
  flag: number;
  opendropdown() {
    this.showDropDown = !this.showDropDown;
  }
  closedropdown() {
    this.showDropDown = false;
  }
  formdata = new FormGroup({
    uname: new FormControl("", Validators.compose([
      Validators.required,
      Validators.minLength(6)
    ])),
    passwd: new FormControl("")
  });
  showDialog: boolean
  constructor(private servicePhanQuyen: PhanquyenService, private router: Router, private serviceLogin: LoginService, private serviceUserNhom: UsernhomService) { }

  ngOnInit() {
    this.getAllUserNhom();
    sessionStorage.setItem('Nhomky_id',null);
    sessionStorage.setItem('Username',null);
  }
  onClickSubmit(data) {
    this.serviceLogin.LogIn(data.uname, data.passwd).subscribe(data => {
      let userid = data['UserLogin']
      this.flag = data['flag']
      if (userid != null) {
        if (this.flag == 2) {
          let nhomkyid = this.getUserNhom.find(data => data.Manhanvien == userid).Nhomky_id;
          let ten=this.getUserNhom.find(data => data.Manhanvien == userid).Username;
          this.getAllPhanQuyenTree(nhomkyid)
          sessionStorage.setItem('Nhomky_id',nhomkyid);
          sessionStorage.setItem('Username',ten);
        }
        if(this.flag == 1){
          this.getAllPhanQuyenTree(this.getUserNhom[0].Nhomky_id)
        }
        
        this.formdata.reset()
      } else {
        this.formdata.reset()
      }

    });
    this.showDialog = !this.showDialog
  }
  CallMainOpen() {
    this.main = false;
    this.router.navigate(['thongtin']);
  }
  LogOut() {
    this.CallMainClose();
  }
  CallMainClose() {
    this.main = true;
    this.getall = null;
    this.MenuCha = null;
    sessionStorage.setItem('Nhomky_id',null);
    this.getAllUserNhom();
  }
  getAllUserNhom() {
    this.serviceUserNhom.GetUserNhom().subscribe(data => {
      this.getUserNhom = data;
    });
  }
  getAllPhanQuyenTree(idnhomky: string) {
    this.servicePhanQuyen.GetPhanQuyen(idnhomky).subscribe(data => {
      this.getphanquyen = [];
      this.getAllPhanQuyen(data);
    });
  }
  getAllPhanQuyen(phanquyen: phanquyen[]) {
    for (let i = 0; i < phanquyen.length; i++) {
      this.getphanquyen.push(phanquyen[i]);
      if (phanquyen[i].ListPhanquyen.length > 0) {
        for (let j = 0; j < phanquyen[i].ListPhanquyen.length; j++) {
          this.getphanquyen.push(phanquyen[i].ListPhanquyen[j]);
          if (phanquyen[i].ListPhanquyen[j].ListPhanquyen.length > 0) {
            this.getAllPhanQuyen(phanquyen[i].ListPhanquyen[j].ListPhanquyen);
          }
        }
      }
    }

    if (this.flag == 2) {
      this.getall = this.getphanquyen.filter(x => x.quyenXem == true);
      this.MenuCha = this.getphanquyen.filter(x => x.quyenXem == true && x.Idcha == null);
    }
    else if (this.flag == 1) {
      this.getall = this.getphanquyen;
      this.MenuCha = this.getphanquyen.filter(x => x.Idcha == null);
    } else {
      this.CallMainClose()
    }

  }
}
