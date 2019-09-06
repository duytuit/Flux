import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DanhmucService } from 'src/app/Shareds/services/danhmuc.service';
import { danhmuc } from 'src/app/Shareds/models/danhmuc';

@Component({
  selector: 'app-danhmuc',
  templateUrl: './danhmuc.component.html',
  styleUrls: ['./danhmuc.component.css']
})
export class DanhmucComponent implements OnInit {
  
  @Input() zIndex: number = 1000000000;
  
  trangthai:string;
  getdanhmuc:danhmuc[];
  iddanhmuc:string
  madanhmuc:string
  tendanhmuc:string

  constructor(private servicedanhmuc:DanhmucService) { }

  ngOnInit() {
    this.getAlldanhmuc();
  }
  adddanhmuc = new FormGroup(
    {
      Madanhmuc: new FormControl(),
      Tendanhmuc: new FormControl(),
      Thutu: new FormControl(),
      Tinhtrang: new FormControl(),
    }
  );
  getAlldanhmuc() {
    this.servicedanhmuc.GetDanhMuc().subscribe(data => {
      this.getdanhmuc = data;
    });
  }
  onSubmit() {
      this.servicedanhmuc.AddDanhMuc(this.adddanhmuc.value).subscribe(data=>{
        this.getAlldanhmuc();
        this.close();
        this.adddanhmuc.reset();
      }); 
  }
  lammoi(){
    this.getAlldanhmuc();
  }
  close(){
      let element: HTMLElement = document.getElementById('modalRootClose') as HTMLElement;
      element.click();
  }
  openDelete(item:danhmuc){
    let element: HTMLElement = document.getElementById('modalDelete') as HTMLElement;
    element.click();
    this.iddanhmuc=item.Danhmucid;
    this.madanhmuc=item.Madanhmuc;
    this.tendanhmuc=item.Tendanhmuc;
  }
  onDeleteDanhmuc(iddanhmuc:string){
    if (iddanhmuc != null) {
      this.servicedanhmuc.DeleteDanhMuc(iddanhmuc).subscribe(data => {
        this.lammoi();
      });
      let element: HTMLElement = document.getElementById('modalDeleteHide') as HTMLElement;
      element.click();
    }
  }
  modalopen(Danhmuc:danhmuc) {
    this.madanhmuc=Danhmuc.Madanhmuc;
    this.tendanhmuc=Danhmuc.Tendanhmuc;
    if(Danhmuc.Tinhtrang==true)
    {
       this.trangthai='true';
    }else
    {
      this.trangthai='false';
    }
    for (let i = 0; i < this.getdanhmuc.length; i++) {
      if (this.getdanhmuc[i].edittable == true) {
        this.getdanhmuc[i].edittable = false
      }
    }
    Danhmuc.edittable = !Danhmuc.edittable;
  }
  modalclose(Danhmuc:danhmuc) {
    Danhmuc.edittable = !Danhmuc.edittable;
    if (Danhmuc.edittable == false) {
      Danhmuc.Madanhmuc = this.madanhmuc;
      Danhmuc.Tendanhmuc=this.tendanhmuc;
      if(this.trangthai=='true')
      {
        Danhmuc.Tinhtrang=true;
      }else
      {
        Danhmuc.Tinhtrang=false;
      }
    }
    this.servicedanhmuc.UpdateDanhMuc(Danhmuc).subscribe();
  }
  onEvent(trangthai:string){
     this.trangthai=trangthai;
  }
}
