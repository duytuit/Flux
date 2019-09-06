import { Component, OnInit, Renderer2, ElementRef, Input } from '@angular/core';
import { nhomky } from 'src/app/Shareds/models/nhomky';
import { NhomkyService } from 'src/app/Shareds/services/nhomky.service';
import { phanquyen } from 'src/app/Shareds/models/phanquyen';
import { PhanquyenService } from 'src/app/Shareds/services/phanquyen.service';

@Component({
  selector: 'app-phanquyen',
  templateUrl: './phanquyen.component.html',
  styleUrls: ['./phanquyen.component.css']
})
export class PhanquyenComponent implements OnInit {

  @Input() zIndex: number = 1000000000;

  getphanquyen: phanquyen[] = [];
  getphanquyenTree: phanquyen[]
  getChildrenTree: phanquyen[];
  tam:number
  getnhomky:nhomky[];
  IDnhomky:string;
  constructor(private servicePhanQuyen: PhanquyenService, private renderer: Renderer2, private el: ElementRef,private servicenhomky: NhomkyService) {
  }
  ngOnInit() {
    this.getAllnhomky();
  }
  GetNhom(NhomKy:nhomky,i:number){
    this.IDnhomky=NhomKy.Nhomky_id;
    this.tam=i
    this.getAllPhanQuyenTree(this.IDnhomky);
  }
  getAllnhomky() {
    this.servicenhomky.GetNhom().subscribe(data => {
      if (data.length > 0){
        this.getnhomky = data;
        this.tam=0;
        this.getAllPhanQuyenTree(this.getnhomky[0].Nhomky_id);
      }
    });
  }
  getColor(i){
    if (this.tam === i) {
      return '#364f6969';
    }
  }
  modalXem($event){
   for(let i=0;i<this.getphanquyen.length;i++)
   {
          if(this.getphanquyen[i].Quyenid==$event.Quyenid)
          {
           this.getphanquyen[i].quyenXem=!$event.quyenXem;
           this.getphanquyen[i].Nhomky_id=this.IDnhomky;
           this.CapNhap(this.getphanquyen[i]);
           break;
          }
   }
  }
  modalThem($event){
    for(let i=0;i<this.getphanquyen.length;i++)
    {
           if(this.getphanquyen[i].Quyenid==$event.Quyenid)
           {
            this.getphanquyen[i].quyenThem=!$event.quyenThem;
            this.getphanquyen[i].Nhomky_id=this.IDnhomky;
            this.CapNhap(this.getphanquyen[i]);
            break;
           }
    }
  }
  modalSua($event){
    for(let i=0;i<this.getphanquyen.length;i++)
    {
           if(this.getphanquyen[i].Quyenid==$event.Quyenid)
           {
            this.getphanquyen[i].quyenCapNhap=!$event.quyenCapNhap;
            this.getphanquyen[i].Nhomky_id=this.IDnhomky;
            this.CapNhap(this.getphanquyen[i]);
            break;
           }
    }
  }
  modalXoa($event){
    for(let i=0;i<this.getphanquyen.length;i++)
    {
           if(this.getphanquyen[i].Quyenid==$event.Quyenid)
           {
            this.getphanquyen[i].quyenXoa=!$event.quyenXoa;
            this.getphanquyen[i].Nhomky_id=this.IDnhomky;
            this.CapNhap(this.getphanquyen[i]);
            break;
           }
    }
  }
  CapNhap(PhanQuyen:phanquyen){
   if(this.IDnhomky!=null)
      {
        this.servicePhanQuyen.UpdatePhanQuyen(PhanQuyen).subscribe();
      }
  }
  getAllPhanQuyenTree(idnhomky:string) {
    this.servicePhanQuyen.GetPhanQuyen(idnhomky).subscribe(data => {
      this.getphanquyenTree = data.filter(x => x.Idcha == null);
      this.getphanquyen = [];
      this.getAllPhanQuyen(data);
      this.PhanQuyenTree();
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
  }
  PhanQuyenTree() {
    for (let i = 0; i < this.getphanquyen.length; i++) {
      if (this.getphanquyen[i].Capdo > 1) {
        let str = ''
        for (let j = 0; j < this.getphanquyen[i].Capdo; j++) {
          str += '--';
        }
        this.getphanquyen[i].Tenmenu = str + this.getphanquyen[i].Tenmenu;
      }
    }
  }
  lammoi() {
     this.getAllnhomky();
  }
}
