import { Component, OnInit, Input } from '@angular/core';
import { usernhom } from 'src/app/Shareds/models/usernhom';
import { FormGroup, FormControl } from '@angular/forms';
import { UsernhomService } from 'src/app/Shareds/services/usernhom.service';
import { NhomkyService } from 'src/app/Shareds/services/nhomky.service';
import { nhomky } from 'src/app/Shareds/models/nhomky';
import { ThongtinNVService } from 'src/app/Shareds/services/thongtin-nv.service';
import { TTnv } from 'src/app/Shareds/models/TTnhanvien';
import { UserService } from 'src/app/Shareds/services/user.service';
import { formatDate } from '@angular/common';
import { User } from 'src/app/Shareds/models/user';

@Component({
  selector: 'app-usernhom',
  templateUrl: './usernhom.component.html',
  styleUrls: ['./usernhom.component.css']
})
export class UsernhomComponent implements OnInit {
  @Input() zIndex: number = 1000000000;

  getUserNhom: usernhom[];
  FgetUserNhom: usernhom[];
  getUser: User[];
  FgetUser:User[];
  getnhomky:nhomky[];
  trangthai:string;
  idusernhom:string;
  idnhanvien:string;
  tennhanvien:string;
  mail:string;
  tennhom:string;
  idnhomky:string;
  getthongtinNV:TTnv[];
  FgetthongtinNV:TTnv[];
  tesst:string;
  pageIndex: number;
  pageSize: number;
  count: number;
  countds: number;
  pageIndexds: number;
  pageSizeds: number;
  pageSizedUser:number;
  pageIndexdUser: number;
  countUser: number;
  indexNV:string;
  indexUser:string;
  thongbao:string=null;
  maNV:string;
  tenNV:string;
  IDuser:string;
  constructor(private serviceUserNhom: UsernhomService,private servicenhomky: NhomkyService,private serviceTTnhanvien: ThongtinNVService,private serviceUser: UserService) { 
    this.pageIndex = 0;
    this.pageSize = 8;
    this.pageIndexds = 0;
    this.pageSizeds = 19;
    this.pageIndexdUser = 0;
    this.pageSizedUser = 8;
  }
  
  ngOnInit() {
    this.getAllTTnhanvien();
    this.lammoi();
  }
  addUserNhom = new FormGroup(
    {
      UserID :new FormControl(),
      Username :new FormControl(),
      Manhanvien :new FormControl(),
      Nhomky_id :new FormControl(),
      Email:new FormControl(),
      Tennhomky:new FormControl(),
      Trangthai:new FormControl()
    }
  );
  addUser = new FormGroup(
    {
      UserID:new FormControl(),
      Manhanvien  :new FormControl(),
      Hovaten  :new FormControl(),
      Email  :new FormControl(),
      Sodienthoai  :new FormControl(),
      Username  :new FormControl(),
      Password  :new FormControl(),
      Anhdaidien  :new FormControl(),
      Diachi  :new FormControl(),
      Ngaysinh  :new FormControl(),
      Tinhtrang  :new FormControl(),
      CMTND  :new FormControl(),
      Ngayvao  :new FormControl(),
      Ngaycapnhap  :new FormControl(),
      Kieuuser  :new FormControl(),
      Chucvu  :new FormControl(),
      Capbac  :new FormControl(),
    }
  );
  getAllTTnhanvien() {
    this.serviceTTnhanvien.GetTTnhanvien().subscribe(data => {
      this.getthongtinNV = data;
      this.FgetthongtinNV= data;
      this.countds= this.FgetthongtinNV.length;
    });
  }
  getAllnhomky() {
    this.servicenhomky.GetNhom().subscribe(data => {
      this.getnhomky= data;
    });
  }
  getAllUser() {
    this.serviceUser.GetUser().subscribe(data => {
      this.getUser = data;
      this.FgetUser=data
      this.countUser= this.FgetUser.length
    });
  }
  getAllUserNhom() {
    this.serviceUserNhom.GetUserNhom().subscribe(data => {
      this.getUserNhom = data;
      this.FgetUserNhom = data;
      this.count=this.FgetUserNhom.length
    });
  }
  getColor(z): string {
    if (this.indexNV === z) {
      return '#364f6969';
    }
  }
  getColorUser(i):string{
    if (this.indexUser === i) {
      return '#364f6969';
    }
  }


  _listFilterNV: string;
  get listFilterNV():string{
    return this._listFilterNV;
  }
  set listFilterNV(value:string){
    this._listFilterNV=value;
    this.FgetthongtinNV=this.listFilterNV ? this.PerformFilterNV(this.listFilterNV):this.getthongtinNV;
    this.countds= this.FgetthongtinNV.length;
  }
  PerformFilterNV(filterBy: string): TTnv[] {
    filterBy = filterBy.toLowerCase();
    return this.getthongtinNV.filter((nhanvien: TTnv) =>
    nhanvien.manhansu.toLowerCase().indexOf(filterBy) !== -1);
  }


  _listFilterUser: string;
  get listFilterUser():string{
    return this._listFilterUser;
  }
  set listFilterUser(value:string){
    this._listFilterUser=value;
    this.FgetUser=this.listFilterUser ? this.PerformFilterUser(this.listFilterUser):this.getUser;
    this.countUser= this.FgetUser.length;
  }
  PerformFilterUser(filterBy: string): User[] {
    filterBy = filterBy.toLowerCase();
    return this.getUser.filter((user: User) =>
    user.Manhanvien.toLowerCase().indexOf(filterBy) !== -1);
  }


  _listFilterUserNhom: string;
  get listFilterUserNhom():string{
    return this._listFilterUserNhom;
  }
  set listFilterUserNhom(value:string){
    this._listFilterUserNhom=value;
    this.FgetUserNhom=this.listFilterUserNhom ? this.PerformFilterUserNhom(this.listFilterUserNhom):this.getUserNhom;
    this.count=this.FgetUserNhom.length
  }
  PerformFilterUserNhom(filterBy: string): usernhom[] {
    filterBy = filterBy.toLowerCase();
    return this.getUserNhom.filter((UserNhom: usernhom) =>
    UserNhom.Manhanvien.toLowerCase().indexOf(filterBy) !== -1);
  }


  modalopenCreateUserNhom(item:User,i){
    this.thongbao=null;
    this.indexUser=i
    this.addUserNhom.controls['UserID'].reset(item.UserID);
    this.addUserNhom.controls['Username'].reset(item.Hovaten);
    this.addUserNhom.controls['Manhanvien'].reset(item.Manhanvien);
    let element: HTMLElement = document.getElementById('modalRootShow') as HTMLElement;
    element.click();
  }
  modalopenCreateUser(item:TTnv,i){
    let checkNV=this.getUser.filter(x=>x.Manhanvien==item.manhansu).length;
    if(checkNV==0)
    {
      this.indexNV=i;
      this.addUser.controls['Manhanvien'].reset(item.manhansu);
      this.addUser.controls['Hovaten'].reset(item.hodem+' '+item.ten);
      this.addUser.controls['Email'].reset(item.email);
      this.addUser.controls['Sodienthoai'].reset(item.dienthoai_didong);
      this.addUser.controls['Diachi'].reset(item.quequan);
      this.addUser.controls['Ngaysinh'].reset(item.ngaysinh);
      this.addUser.controls['CMTND'].reset(item.cmtnd_so);
      this.addUser.controls['Chucvu'].reset(item.chucvu);
      this.addUser.controls['Capbac'].reset(item.capbac);
      this.addUser.controls['Password'].reset('meiko');
      let element: HTMLElement = document.getElementById('modalAddUserShow') as HTMLElement;
        element.click();
    }
  }
  onSubmitAddUser(){
    this.serviceUser.AddUser(this.addUser.value).subscribe(data=>{
      this.lammoi();
      let element: HTMLElement = document.getElementById('modalAddUserClose') as HTMLElement;
      element.click();
    });
  
  }
  onSubmitEditUser(){
    this.serviceUser.UpdateUser(this.addUser.value).subscribe(data=>{
      this.lammoi();
      let element: HTMLElement = document.getElementById('modalEditUserClose') as HTMLElement;
      element.click();
    });
  }
  modalopenEditUser(item:User){
    this.addUser.controls['UserID'].reset(item.UserID);
    this.addUser.controls['Manhanvien'].reset(item.Manhanvien);
    this.addUser.controls['Hovaten'].reset(item.Hovaten);
    this.addUser.controls['Email'].reset(item.Email);
    this.addUser.controls['Sodienthoai'].reset(item.Sodienthoai);
    this.addUser.controls['Username'].reset(item.Username);
    this.addUser.controls['Diachi'].reset(item.Diachi);
    this.addUser.controls['Ngaysinh'].reset(item.Ngaysinh);
    this.addUser.controls['CMTND'].reset(item.CMTND);
    this.addUser.controls['Chucvu'].reset(item.Chucvu);
    this.addUser.controls['Capbac'].reset(item.Capbac);
    this.addUser.controls['Ngayvao'].reset(item.Ngayvao);
    this.addUser.controls['Password'].reset(item.Password);
    let element: HTMLElement = document.getElementById('modalEditUserShow') as HTMLElement;
      element.click();
  }
  onSubmit() {
    
    let manv=this.addUserNhom.controls['Manhanvien'].value;
    let nhomkyid=this.addUserNhom.controls['Nhomky_id'].value;
    let count= this.getUserNhom.filter(x=>x.Manhanvien==manv&&x.Nhomky_id==nhomkyid).length
      if(count==0)
      {
        this.serviceUserNhom.AddUserNhom(this.addUserNhom.value).subscribe(data=>{
          this.lammoi()
          this.close();
          this.addUserNhom.reset();
        }); 
      }else
      {
        this.thongbao='Nhân viên trong nhóm ký này đã tồn tại!'
      }
  }
  onEventNhomKy(idnhomky:string){
    if (idnhomky == 'null') {
      this.addUserNhom.controls['Nhomky_id'].reset();
    }
    else {
      this.addUserNhom.controls['Nhomky_id'].reset(idnhomky.split('+')[0].trim());
      this.addUserNhom.controls['Tennhomky'].reset(idnhomky.split('+')[1].trim());
    }
  }
  onEventTrangThaiEditUser(trangthai:string){
    this.addUser.controls['Tinhtrang'].reset(trangthai);
  }
  onEventNhomKyEdit(idnhomky:string){
      this.idnhomky=idnhomky.split('+')[0].trim();
      this.tennhom=idnhomky.split('+')[1].trim();
      this.tesst=this.idnhomky+'+'+this.tennhom;
  }
  onEventTrangThaiAddUser(trangthai:string){

  }
  lammoi(){
    this.getAllUserNhom();
    this.getAllUser();
    this.getAllnhomky();
    this.indexNV=null
    this.indexUser=null
    this.thongbao=null;
  }
  close(){
      let element: HTMLElement = document.getElementById('modalRootClose') as HTMLElement;
      element.click();
  }
  openDelete(item:usernhom){
    this.idusernhom=item.Usernhomky_id;
    this.idnhanvien=item.Manhanvien;
    this.tennhanvien=item.Username;
    this.tennhom=item.Tennhomky;
    this.idnhomky=item.Nhomky_id;
    let element: HTMLElement = document.getElementById('modalDelete') as HTMLElement;
    element.click();
  }
  onDeleteUserNhom(idUsernhom:string){
    if (idUsernhom != null) {
      this.serviceUserNhom.DeleteUserNhom(idUsernhom).subscribe(data => {
        this.lammoi();
      });
      let element: HTMLElement = document.getElementById('modalDeleteHide') as HTMLElement;
      element.click();
    }
  }
  onDeleteUser(userid:string){
    if (userid != null) {
      this.serviceUser.DeleteUser(userid).subscribe(data => {
        this.lammoi();
      });
      let element: HTMLElement = document.getElementById('modalDeleteUserHide') as HTMLElement;
      element.click();
    }
  }
  openDeleteUser(item:User){
    this.maNV=item.Manhanvien
    this.tenNV=item.Hovaten
    this.IDuser=item.UserID
    let element: HTMLElement = document.getElementById('modalDeleteUserShow') as HTMLElement;
    element.click();
  }
  modalopen(UserNhom: usernhom) {
    this.idnhanvien=UserNhom.Manhanvien;
    this.tennhanvien=UserNhom.Username;
    this.tennhom=UserNhom.Tennhomky;
    this.idnhomky=UserNhom.Nhomky_id;
    this.mail=UserNhom.Email;
    this.tesst=this.idnhomky+'+'+this.tennhom;
    if(UserNhom.Trangthai==true)
    {
        this.trangthai='true';
    }else
    {
      this.trangthai='false';
    }
    for (let i = 0; i < this.getUserNhom.length; i++) {
      if (this.getUserNhom[i].edittable == true) {
        this.getUserNhom[i].edittable = false
      }
    }
    UserNhom.edittable = !UserNhom.edittable;
  }
  modalclose(UserNhom: usernhom) {
    UserNhom.edittable = !UserNhom.edittable;
    if (UserNhom.edittable == false) {
      UserNhom.Manhanvien=this.idnhanvien;
      UserNhom.Username=this.tennhanvien;
      UserNhom.Tennhomky=this.tennhom;
      UserNhom.Nhomky_id= this.idnhomky;
      UserNhom.Email=this.mail;
      if(this.trangthai=='true')
      {
        UserNhom.Trangthai=true;
      }else
      {
        UserNhom.Trangthai=false;
      }
    }
    this.serviceUserNhom.UpdateUserNhom(UserNhom).subscribe();
  }
  onEvent(trangthai:string){
     this.trangthai=trangthai;
  }
  onEventTrangThai(trangthai:string){
    if (trangthai == 'null') {
      this.addUserNhom.controls['Trangthai'].reset();
    }
    else {
      this.addUserNhom.controls['Trangthai'].reset(trangthai);
    }
  }
}
