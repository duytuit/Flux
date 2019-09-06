import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { NhomkyService } from 'src/app/Shareds/services/nhomky.service';
import { nhomky } from 'src/app/Shareds/models/nhomky';
import { GroupService } from 'src/app/Shareds/services/group.service';
import { group } from 'src/app/Shareds/models/group';
@Component({
  selector: 'app-nhomky',
  templateUrl: './nhomky.component.html',
  styleUrls: ['./nhomky.component.css']
})
export class NhomkyComponent implements OnInit {
  @Input() zIndex: number = 1000000000;
  getnhomky: nhomky[];
  idnhomky: string;
  tennhom:string;
  kieunhom:string;
  trangthai:string;
  getgroup:group[];
  Fgetgroup:group[]
  pageIndexds: number;
  pageSizeds: number;
  countds: number;
  constructor(private servicenhomky: NhomkyService,private serviceGroup: GroupService) { 
    this.pageIndexds = 0;
    this.pageSizeds = 19;
  }
  
  ngOnInit() {
   this.lammoi();
  }
  addnhom = new FormGroup(
    {
      Tennhom: new FormControl(),
      Kieunhom: new FormControl(),
      Trangthai: new FormControl(),
    }
  );
  getAllnhomky() {
    this.servicenhomky.GetNhom().subscribe(data => {
      this.getnhomky = data;
    });
  }
  getAllGroup() {
    this.serviceGroup.GetGroup().subscribe(data => {
      this.getgroup = data;
      this.Fgetgroup = data;
      this.countds=this.Fgetgroup.length;
    });
  }
  openDeleteGroup(item:group){
    if (item.Groupid != null) {
      this.serviceGroup.DeleteGroup(item.Groupid).subscribe(data=>{
        this.lammoi();
      });
    }
  }
  _listFilterGroup: string;
  get listFilterGroup():string{
    return this._listFilterGroup;
  }
  set listFilterGroup(value:string){
    this._listFilterGroup=value;
    this.Fgetgroup=this.listFilterGroup ? this.PerformFilterGroup(this.listFilterGroup):this.getgroup;
    this.countds=this.Fgetgroup.length;
  }
  PerformFilterGroup(filterBy: string): group[] {
    filterBy = filterBy.toLowerCase();
    return this.getgroup.filter((Group: group) =>
    Group.Groupid.toLowerCase().indexOf(filterBy) !== -1);
  }
  onSubmit() {
      this.servicenhomky.AddNhom(this.addnhom.value).subscribe(data=>{
        this.lammoi()
        this.close();
        this.addnhom.reset();
      }); 
  }
  lammoi(){
    this.getAllnhomky();
    this.getAllGroup();
  }
  close(){
      let element: HTMLElement = document.getElementById('modalRootClose') as HTMLElement;
      element.click();
  }
  openDelete(item:nhomky){
    let element: HTMLElement = document.getElementById('modalDelete') as HTMLElement;
    element.click();
    this.idnhomky=item.Nhomky_id;
    this.tennhom=item.Tennhom;
    this.kieunhom=item.Kieunhom;
  }
  onDeleteNhomKy(idnhomky:string){
    if (idnhomky != null) {
      this.servicenhomky.DeleteNhom(idnhomky).subscribe(data => {
        this.lammoi();
      });
      let element: HTMLElement = document.getElementById('modalDeleteHide') as HTMLElement;
      element.click();
    }
  }
  modalopen(nhomky: nhomky) {
    this.tennhom=nhomky.Tennhom;
    this.kieunhom=nhomky.Kieunhom;
    if(nhomky.Trangthai==true)
    {
        this.trangthai='true';
    }else
    {
      this.trangthai='false';
    }
    for (let i = 0; i < this.getnhomky.length; i++) {
      if (this.getnhomky[i].edittable == true) {
        this.getnhomky[i].edittable = false
      }
    }
    nhomky.edittable = !nhomky.edittable;
  }
  modalclose(nhomky: nhomky) {
    nhomky.edittable = !nhomky.edittable;
    if (nhomky.edittable == false) {
      nhomky.Tennhom = this.tennhom;
      nhomky.Kieunhom=this.kieunhom;
      if(this.trangthai=='true')
      {
           nhomky.Trangthai=true;
      }else
      {
        nhomky.Trangthai=false;
      }
    }
    this.servicenhomky.UpdateNhom(nhomky).subscribe();
  }
  onEvent(trangthai:string){
     this.trangthai=trangthai;
  }
}
