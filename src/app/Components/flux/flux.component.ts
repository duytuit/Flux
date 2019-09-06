import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';
import { PartnoService } from 'src/app/Shareds/services/partno.service';
import * as XLSX from 'xlsx';
import { FluxService } from 'src/app/Shareds/services/flux.service';
import { formatDate } from '@angular/common';
import { flux } from 'src/app/Shareds/models/flux';
import { ThongtinkyService } from 'src/app/Shareds/services/thongtinky.service';
import { quytrinh } from 'src/app/Shareds/models/quytrinh';
@Component({
  selector: 'app-flux',
  templateUrl: './flux.component.html',
  styleUrls: ['./flux.component.css']
})
export class FluxComponent implements OnInit {
  @Input() zIndex: number = 1000000000;
  form: FormGroup;
  GetAllPartNo: any[];
  GetAllLotNo: any[];
  pageIndex: number;
  pageSize: number;
  count: number;
  countds: number;
  getflux: flux[];
  Fgetflux: flux[];
  mahang: string;
  malot: string;
  doday: string;
  soluong: string;
  idflux: string;

  tam: number;

  daky: boolean;
  quytrinh: quytrinh;
  getquytrinh: quytrinh[];
  Fgetquytrinh: quytrinh[];
  chucnang: boolean = true;

  pageIndexds: number;
  pageSizeds: number;
  ghichunoidung:string;

  constructor(private fb: FormBuilder, private serviceflux: FluxService, private servicePartNo: PartnoService, private servicequytrinh: ThongtinkyService) {
    this.pageIndex = 0;
    this.pageSize = 19;
    this.pageIndexds = 0;
    this.pageSizeds = 19;
    this.form = this.fb.group({
      credentials: this.fb.array([]),
    });
    for (let i = 0; i < 3; i++) {
      this.addCreds();
    }
  }
  getArrayControls(){
    return (this.form.get('credentials') as FormArray).controls;
  }
  getAllflux() {
    
    let strnhomky_id: string = sessionStorage.getItem('Nhomky_id');
    //#region current
    // this.serviceflux.GetFlux(this.dateflux).subscribe(data => {
    //   if(data.length>0)
    //   {
    //     this.servicequytrinh.GetQuytrinhByIdNhomky(strnhomky_id).subscribe(data1=>{
    //     this.getquytrinh=data1
    //     this.getflux = data.filter(x=>x.GroupFlux==this.getquytrinh[0].GroupFlux);
    //     this.count = this.getflux.length;
    //     this.tam=0;
    //     this.daky=this.getquytrinh[0].Daky;
    //     this.quytrinh=this.getquytrinh[0];
    //     if(this.daky==true)
    //     {
    //      this.chucnang=false
    //     }else
    //     this.chucnang=true
    //     });
    //   }else
    //   {
    //     this.getquytrinh=null;
    //     this.getflux=null;
    //     this.count=0;
    //   }
    // });
    //#endregion
    this.servicequytrinh.GetQuytrinhByIdNhomky(strnhomky_id).subscribe(data => {
      if (data.length > 0) {
        this.getquytrinh = data.filter((thing, i, arr) => {
          return arr.indexOf(arr.find(t => t.Groupid === thing.Groupid)) === i;
        });
        this.Fgetquytrinh=this.getquytrinh
        this.countds = this.Fgetquytrinh.length;
        this.quytrinh = this.getquytrinh[0];
        this.serviceflux.GetGroupFlux(this.getquytrinh[0].Groupid).subscribe(data1 => {
          if (data1.length > 0) {
            this.getflux = data1;
            this.Fgetflux=this.getflux;
            this.count = this.Fgetflux.length;
            this.tam = 0;
            this.daky = this.getquytrinh[0].Daky;
            if (this.daky == true) {
              this.chucnang = false
            } else
              this.chucnang = true
          }
          else {
            this.getflux = null;
            this.Fgetflux=this.getflux;
            this.count = 0;
          }
        });
      } else {
        this.getquytrinh = null;
        this.Fgetquytrinh=this.getquytrinh
        this.countds = 0;
      }
    });
  }
  getColor(z): string {
    if (this.tam === z) {
      return 'red';
    }
  }
  _listFilter: string;
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter=value;
    this.Fgetquytrinh=this.listFilter ? this.PerformFilter(this.listFilter):this.getquytrinh;
    this.countds = this.Fgetquytrinh.length;
  }
  PerformFilter(filterBy: string): quytrinh[] {
    filterBy = filterBy.toLowerCase();
    return this.getquytrinh.filter((QuyTrinh: quytrinh) =>
    QuyTrinh.Groupid.toLowerCase().indexOf(filterBy) !== -1);
}
_listFilterMaHang: string;
get listFilterMahang():string{
  return this._listFilterMaHang;
}
set listFilterMahang(value:string){
  this._listFilterMaHang=value;
  this.Fgetflux=this.listFilterMahang ? this.FluxFilterMahang(this.listFilterMahang):this.getflux;
  this.count = this.Fgetflux.length;
}
_listFilterMaLot: string;
get listFilterMalot():string{
  return this._listFilterMaLot;
}
set listFilterMalot(value:string){
  this._listFilterMaLot=value;
  this.Fgetflux=this.listFilterMalot ? this.FluxFilterMaLot(this.listFilterMalot):this.getflux;
  this.count = this.Fgetflux.length;
}
FluxFilterMahang(filterByMahang: string): flux[] {
  if(filterByMahang)
  {
    return this.Fgetflux.filter((Flux: flux) =>
    Flux.Mahang.toLowerCase().indexOf(filterByMahang.toLowerCase()) !== -1);
  }
}
FluxFilterMaLot(filterByMalot:string): flux[] {
  if(filterByMalot)
  {
    return this.Fgetflux.filter((Flux: flux) =>
    Flux.Malot.toLowerCase().indexOf(filterByMalot.toLowerCase()) !== -1);
  }
}
  close() {
    let element: HTMLElement = document.getElementById('close') as HTMLElement;
    element.click();
  }
  addCreds() {
    const creds = this.form.controls.credentials as FormArray;
    creds.push(this.fb.group({
      Mahang: '',
      Malot: '',
      Doday: '',
      Soluong: '',
      Ghichu: '',
      Trangthai: ''
    }));
  }
  removeGroup(i: number) {
    const control = <FormArray>this.form.controls['credentials'];
    control.removeAt(i);
  }
  ngOnInit() {
    this.servicePartNo.GetAllPartNo().subscribe(data => {
      this.GetAllPartNo = data;
    });
    this.getAllflux();
  }
  onFileChange(ev) {
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      let list: Array<number> = [];
      for (let i = 4; i < 28; i++) {
        list.push(jsonData['Sheet1'][i]['__EMPTY']);
      }
      let minlist = Math.min.apply(null, list)
      console.log(minlist);
    }
    reader.readAsBinaryString(file);
  }
  getTypeahead(event: string, i: number) {
    var control = <FormArray>this.form.get('credentials');
    control.controls[i].get('Mahang').setValue(event);
    if (event.split('(').length > 0) {
      this.servicePartNo.GetLotNoByPart(event.split('(')[0].trim()).subscribe(data => {
        this.GetAllLotNo = data
      });
      this.servicePartNo.GetThicknessByPart(event.split('(')[0].trim()).subscribe(data => {
        let index = data.toString();
        let t = index.indexOf("um");
        let z = index.charAt(t - 3) + index.charAt(t - 2) + index.charAt(t - 1);
        control.controls[i].get('Doday').setValue(z);
      });
    }
    else {
      this.servicePartNo.GetLotNoByPart(event.trim()).subscribe(data => {
        this.GetAllLotNo = data
      });
      this.servicePartNo.GetThicknessByPart(event).subscribe(data => {
        let index = data.toString();
        let t = index.indexOf("um");
        let z = index.charAt(t - 3) + index.charAt(t - 2) + index.charAt(t - 1);
        control.controls[i].get('Doday').setValue(z);
      });
    }
  }
  getTypeahead1(event: string, i: number) {
    var control = <FormArray>this.form.get('credentials');
    control.controls[i].get('Malot').setValue(event);
  }
  onSubmit() {
    var df = JSON.stringify(this.form.value);
    var json: any[] = JSON.parse(df);
    this.serviceflux.AddFlux(Object.values(json)[0]).subscribe(data=>{
      this.getAllflux();
      this.close();
    })
  }
  onSelect(option:string){
  this.getflux = null;
  this.Fgetflux=this.getflux;
  this.count = 0;
  }
  _listFilterSelect: string='';
  get listFilterSelect():string{
    return this._listFilterSelect;
  }
  set listFilterSelect(value:string){
    this._listFilterSelect=value;
    this.Fgetquytrinh=this.listFilterSelect ? this.PerformFilterSelect(this.listFilterSelect):this.getquytrinh;
    this.countds = this.Fgetquytrinh.length;
  }
  PerformFilterSelect(filterBySelect: string): quytrinh[] {
    filterBySelect = filterBySelect.toLocaleLowerCase();
       if(filterBySelect=='true')
       {
        return this.getquytrinh.filter((QuyTrinh: quytrinh) =>(
        QuyTrinh.Daky==true))
       }else
       {
        return this.getquytrinh.filter((QuyTrinh: quytrinh) =>
          QuyTrinh.Daky==false)
       }
}
  onGroup(group: string) {
    if (group != null) {
      this.serviceflux.GetGroupFlux(group).subscribe(data => {
        this.getflux = data;
        this.Fgetflux=this.getflux;
        this.count = this.Fgetflux.length;
      });
    }
    for (let i = 0; i < this.getquytrinh.length; i++) {
      if (this.getquytrinh[i].Groupid === group) {
        this.tam = i;
        this.daky = this.getquytrinh[i].Daky;
        this.quytrinh = this.getquytrinh[i];
        if (this.daky == true) {
          this.chucnang = false
        } else
          this.chucnang = true
      }
    }
  }
  lammoi() {
    this.getAllflux();
  }
  modalopen(flux: flux, z: number) {
    this.mahang = flux.Mahang;
    this.malot = flux.Malot;
    this.doday = flux.Doday;
    this.soluong = flux.Soluong;
    if (flux.Mahang.split('(').length > 0) {
      this.servicePartNo.GetLotNoByPart(flux.Mahang.split('(')[0].trim()).subscribe(data => {
        this.GetAllLotNo = data
      });
    }
    else {
      this.servicePartNo.GetLotNoByPart(flux.Mahang.trim()).subscribe(data => {
        this.GetAllLotNo = data
      });
    }
    for (let i = 0; i < this.getflux.length; i++) {
      if (this.getflux[i].edittable == true) {
        this.getflux[i].edittable = false
      }
    }
    flux.edittable = !flux.edittable;
  }
  modalclose(flux: flux, i: number) {
    flux.edittable = !flux.edittable;
    if (flux.edittable == false) {
      flux.Mahang = this.mahang;
      flux.Malot = this.malot;
      flux.Doday = this.doday;
      flux.Soluong = this.soluong;
    }
    this.serviceflux.UpdateFlux(flux).subscribe()
  }
  getMahang(event: string, flux: flux) {
    this.mahang = event;
    flux.Malot = null;
    if (event.split('(').length > 0) {
      this.servicePartNo.GetLotNoByPart(event.split('(')[0].trim()).subscribe(data => {
        this.GetAllLotNo = data
      });
      this.servicePartNo.GetThicknessByPart(event.split('(')[0].trim()).subscribe(data => {
        let index = data.toString();
        let t = index.indexOf("um");
        let z = index.charAt(t - 3) + index.charAt(t - 2) + index.charAt(t - 1);
        this.doday = z;
      });
    }
    else {
      this.servicePartNo.GetLotNoByPart(event.trim()).subscribe(data => {
        this.GetAllLotNo = data
      });
      this.servicePartNo.GetThicknessByPart(event).subscribe(data => {
        let index = data.toString();
        let t = index.indexOf("um");
        let z = index.charAt(t - 3) + index.charAt(t - 2) + index.charAt(t - 1);
        this.doday = z;
      });
    }
  }
  getMalot(event: string) {
    this.malot = event;
  }
  openDelete(flux: flux) {
    let element: HTMLElement = document.getElementById('modalDelete') as HTMLElement;
    element.click();
    this.mahang = flux.Mahang;
    this.malot = flux.Malot;
    this.doday = flux.Doday;
    this.soluong = flux.Soluong;
    this.idflux = flux.Flux_id;
  }
  onDeleteFlux(idflux: string) {
    if (idflux != null) {
      this.serviceflux.DeleteFlux(idflux).subscribe(data => {
        this.lammoi();
      });
      let element: HTMLElement = document.getElementById('modalDeleteHide') as HTMLElement;
      element.click();
    }
  }
  updatequytrinh(quytrinh: quytrinh) {
    if (quytrinh.Daky == false) {
      quytrinh.Daky = true;
      quytrinh.Ghichu=this.ghichunoidung;
      quytrinh.User_id = sessionStorage.getItem('Username');
      quytrinh.Ngayky = formatDate(Date.now(), 'yyyy-MM-dd HH:mm', 'en-US');
      this.servicequytrinh.UpdateQuytrinh(quytrinh).subscribe();
      let element: HTMLElement = document.getElementById('modalNoidungHide') as HTMLElement;
      element.click();
      this.daky = true;
      this.chucnang = false;
    } else {
      console.log('Bạn không thể hủy ký!')
      //#region dfsd
      // this.servicequytrinh.GetQuytrinhByGroupFlux(quytrinh.GroupFlux).subscribe(data=>{
      //   for(let i =0;i<data.length;i++)
      //   {
      //     if(quytrinh.Kieunhom==data[i].Kieunhom)
      //     {
      //      if(i+1<data.length)
      //      {
      //        if(data[i+1].Daky==false)
      //        {
      //         quytrinh.Daky=false;
      //         quytrinh.Ngayky=null;
      //         this.daky=false;
      //         this.chucnang=true;
      //         this.servicequytrinh.UpdateQuytrinh(quytrinh).subscribe();
      //        }else
      //        console.log('Danh sách của bạn đang được xử lý!')
      //      }
      //     }
      //   }
      //   });
      //#endregion
    }

  }
  OpenUpdateQuytrinh(){
    let element: HTMLElement = document.getElementById('modalNoidung') as HTMLElement;
    element.click();
  }

}
