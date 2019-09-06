import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { flux } from 'src/app/Shareds/models/flux';
import { FluxService } from 'src/app/Shareds/services/flux.service';
import { ExcelService } from 'src/app/Shareds/services/excel.service';
import { thongke } from 'src/app/Shareds/models/thongke';
import { ThongkeService } from 'src/app/Shareds/services/thongke.service';

@Component({
  selector: 'app-thongke',
  templateUrl: './thongke.component.html',
  styleUrls: ['./thongke.component.css']
})
export class ThongkeComponent implements OnInit {
  pageIndex: number;
  pageSize: number;
  count: number;
  pageIndexds: number;
  pageSizeds: number;
  countds: number;
  showDialog:boolean=true;
  @ViewChild('fromdate') fromdate: ElementRef;
  @ViewChild('todate') todate: ElementRef;
  viewthongke:thongke;
  getthongke: thongke[];
  Fgetthongke: thongke[];
  getGroup:thongke[];
  FgetGroup:thongke[];
  indexGroupID:string;
  trangthai:string='null';
  constructor( private serviceThongke: ThongkeService, private excelService: ExcelService) {
    this.pageIndex = 0;
    this.pageSize = 19;
    this.pageIndexds = 0;
    this.pageSizeds = 19;
   }
GetThongKeBydate(fromdate: string, todate: string):void
{
 if(fromdate&&todate)
 {
  this.serviceThongke.GetThongKe(fromdate,todate,this.trangthai).subscribe(data=>{
    this.getGroup = data.filter((thing, i, arr) => {
      return arr.indexOf(arr.find(t => t.Groupid === thing.Groupid)) === i;
    });
    this.FgetGroup=this.getGroup
    this.countds=this.FgetGroup.length
    this.getthongke=data;
    this.Fgetthongke=this.getthongke;
    this.count=this.Fgetthongke.length
  });
 }
  
}
onSeach(trangthai:string)
{
  this.trangthai=trangthai;
}
getColor(z): string {
  if (this.indexGroupID === z) {
    return '#364f6969';
  }
}
SelectGroupID(item:thongke,i)
{
  this.indexGroupID=i;
  this.Fgetthongke=this.getthongke;
  this.Fgetthongke=item.Groupid ? this.FluxFilterGroupID(item.Groupid):this.getthongke;
  this.count = this.Fgetthongke.length;
}
onMouseEnter(item:thongke) {
  this.showDialog=false;
 this.viewthongke=item
 if(this.viewthongke.Trangthai=="1")
 {
  this.viewthongke.Trangthai="Đã hoàn thành";
 }
 if(this.viewthongke.Trangthai=="0")
 {
  this.viewthongke.Trangthai="Chưa hoàn thành";
  this.viewthongke.Nhomky=null;
 }
}
onMouseEnterClose(){
  this.showDialog=true;
}
@HostListener('document:click', ['$event'])
onClickEvent(event: MouseEvent) {
  this.showDialog=true;
}
_listFilterXNQL: string;
get listFilterXNQL():string{
  return this._listFilterXNQL;
}
set listFilterXNQL(value:string){
  this._listFilterXNQL=value;
  this.Fgetthongke=this.listFilterXNQL ? this.PerformFilterXNQL(this.listFilterXNQL):this.getthongke;
  this.count = this.Fgetthongke.length;
}
PerformFilterXNQL(filterBy: string): thongke[] {
  filterBy = filterBy.toLowerCase();
  return this.getthongke.filter((Flux: thongke) =>
  Flux.Xacnhanql.toLowerCase().indexOf(filterBy) !== -1);
}
_listFilterYeuCau: string;
get listFilterYeuCau():string{
  return this._listFilterYeuCau;
}
set listFilterYeuCau(value:string){
  this._listFilterYeuCau=value;
  this.FgetGroup=this.listFilterYeuCau ? this.PerformFilterYeuCau(this.listFilterYeuCau):this.getGroup;
  this.countds = this.FgetGroup.length;
}
PerformFilterYeuCau(filterBy: string): thongke[] {
  filterBy = filterBy.toLowerCase();
  return this.getGroup.filter((Flux: thongke) =>
  Flux.Groupid.toLowerCase().indexOf(filterBy) !== -1);
}
_listFilterXNPQ: string;
get listFilterXNPQ():string{
  return this._listFilterXNPQ;
}
set listFilterXNPQ(value:string){
  this._listFilterXNPQ=value;
  this.Fgetthongke=this.listFilterXNPQ ? this.PerformFilterXNPQ(this.listFilterXNPQ):this.getthongke;
  this.count = this.Fgetthongke.length;
}
PerformFilterXNPQ(filterBy: string): thongke[] {
  filterBy = filterBy.toLowerCase();
  return this.getthongke.filter((Flux: thongke) =>
  Flux.Xacnhanpq.toLowerCase().indexOf(filterBy) !== -1);
}
_listFilterMaHang: string;
get listFilterMahang():string{
  return this._listFilterMaHang;
}
set listFilterMahang(value:string){
  this._listFilterMaHang=value;
  this.Fgetthongke=this.listFilterMahang ? this.FluxFilterMahang(this.listFilterMahang):this.getthongke;
  this.count = this.Fgetthongke.length;
}
_listFilterMaLot: string;
get listFilterMalot():string{
  return this._listFilterMaLot;
}
set listFilterMalot(value:string){
  this._listFilterMaLot=value;
  this.Fgetthongke=this.listFilterMalot ? this.FluxFilterMaLot(this.listFilterMalot):this.getthongke;
  this.count = this.Fgetthongke.length;
}
FluxFilterMahang(filterByMahang: string): thongke[] {
  if(filterByMahang)
  {
    return this.Fgetthongke.filter((Flux: thongke) =>
    Flux.Mahang.toLowerCase().indexOf(filterByMahang.toLowerCase()) !== -1);
  }
}
FluxFilterMaLot(filterByMalot:string): thongke[] {
  if(filterByMalot)
  {
    return this.Fgetthongke.filter((Flux: thongke) =>
    Flux.Malot.toLowerCase().indexOf(filterByMalot.toLowerCase()) !== -1);
  }
}
FluxFilterGroupID(filterByMalot:string): thongke[] {
  if(filterByMalot)
  {
    return this.Fgetthongke.filter((Flux: thongke) =>
    Flux.Groupid.toLowerCase().indexOf(filterByMalot.toLowerCase()) !== -1);
  }
}
refresh(): void {
  this.fromdate.nativeElement.value = '';
  this.todate.nativeElement.value = '';
  this.Fgetthongke=null;
  this.FgetGroup=null;
  this.getthongke=null;
  this.getGroup=null;
  this.count=null;
  this.countds=null;
}
  ngOnInit() {
    this.viewthongke=null;
  }
  exportAsXLSX() {
    if(this.Fgetthongke.length>1)
    {
      this.excelService.exportAsExcelFile(this.Fgetthongke, 'Thống kê danh sách tái Flux');
    }
    
  }
}
