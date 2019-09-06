import { Component, OnInit, Input, Renderer2, ElementRef, HostListener } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MenuService } from 'src/app/Shareds/services/menu.service';
import { menu } from 'src/app/Shareds/models/menu';
import { style } from '@angular/animations';
import { DanhmucService } from 'src/app/Shareds/services/danhmuc.service';
import { danhmuc } from 'src/app/Shareds/models/danhmuc';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() zIndex: number = 1000000000;
  getmenu: menu[] = [];
  getmenuTree: menu[]
  getChildrenTree: menu[];
  getvalue: menu[];
  Menu: menu;
  getdanhmuc:danhmuc[];
  showDropDown: boolean = false;
  ParentName: string;
  GetTenmenu: string;
  GetDuongdan: string;
  Getmenuid: string;

  tesst:string;
  trangthaiedit:string;
  idcha:string;
  constructor(private serviceMenu: MenuService, private renderer: Renderer2, private el: ElementRef,private servicedanhmuc:DanhmucService) {
  }
  ngOnInit() {
    this.getAllMenuTree();
    this.getAlldanhmuc();
  }
  getAlldanhmuc() {
    this.servicedanhmuc.GetDanhMuc().subscribe(data => {
      this.getdanhmuc = data;
    });
  }
  nodeClickedEdit($event) {
    this.tesst=$event.Danhmucid;
    if ($event.Idcha != null) {
      this.addmenu.controls['Idcha'].enable();
      this.ParentName = this.getmenu.find(data => data.Menuid == $event.Idcha).Tenmenu;
    }else{
      this.ParentName=$event.Tenmenu;
      this.addmenu.controls['Idcha'].disable();
    }
    this.Menu = $event;
    this.trangthaiedit=$event.Tinhtrang
    this.ParentName=$event.Tenmenu
    this.idcha=$event.Idcha;
    let element: HTMLElement = document.getElementById('modalEdit') as HTMLElement;
    element.click();
  }
  onSubmitEdit(){
   //Update Menu
     if(this.idcha==null)
     {
              this.addmenu.controls['Capdo'].reset(1)
              this.addmenu.controls['Idcha'].reset()
              this.addmenu.controls['Danhmucid'].reset(this.tesst)
              this.addmenu.controls['Tinhtrang'].reset(this.trangthaiedit);
              let tam = this.addmenu.controls['Tenmenu'].value
              this.addmenu.controls['Tenmenu'].reset(tam.split('-')[tam.split('-').length-1].trim())
              this.serviceMenu.UpdateNhom(this.addmenu.value).subscribe(data=>{
                this.addmenu.reset();
                let element: HTMLElement = document.getElementById('modalEditHide') as HTMLElement;
                element.click();
                this.lammoi()
              })
     }
     else
     {
              let parentid=this.getmenu.find(data => data.Tenmenu == this.ParentName).Menuid;
              let idcha=this.getmenu.find(data => data.Tenmenu == this.ParentName).Idcha;
              if(idcha==null)
              {  let Capdo =this.getmenu.find(data => data.Tenmenu == this.ParentName).Capdo;
                  this.addmenu.controls['Capdo'].reset(Capdo+2)
                  this.addmenu.controls['Idcha'].reset(parentid)
                  this.addmenu.controls['Danhmucid'].reset(this.tesst)
                  this.addmenu.controls['Tinhtrang'].reset(this.trangthaiedit);
                  let tam = this.addmenu.controls['Tenmenu'].value
                  this.addmenu.controls['Tenmenu'].reset(tam.split('-')[tam.split('-').length-1].trim())
                //  console.log(this.addmenu.value)
                  this.serviceMenu.UpdateNhom(this.addmenu.value).subscribe(data=>{
                    this.addmenu.reset();
                    let element: HTMLElement = document.getElementById('modalEditHide') as HTMLElement;
                    element.click();
                    this.lammoi()
                  })
                  
              }else
              {
                          let parentid=this.getmenu.find(data => data.Tenmenu == this.ParentName).Menuid;
                          if(parentid!=this.addmenu.controls['Menuid'].value){
                            let Capdo =this.getmenu.find(data => data.Tenmenu == this.ParentName).Capdo;
                              this.addmenu.controls['Idcha'].reset(parentid)
                              this.addmenu.controls['Capdo'].reset(Capdo+2)
                              this.addmenu.controls['Danhmucid'].reset(this.tesst)
                              this.addmenu.controls['Tinhtrang'].reset(this.trangthaiedit);
                              let tam = this.addmenu.controls['Tenmenu'].value
                              this.addmenu.controls['Tenmenu'].reset(tam.split('-')[tam.split('-').length-1].trim())
                              console.log(this.addmenu.value)
                              this.serviceMenu.UpdateNhom(this.addmenu.value).subscribe(data=>{
                                this.addmenu.reset();
                                let element: HTMLElement = document.getElementById('modalEditHide') as HTMLElement;
                                element.click();
                                this.lammoi()
                              })
                          }
                          else
                          {
                            let idcha=this.getmenu.find(data => data.Tenmenu == this.ParentName).Idcha;
                            let Capdo =this.getmenu.find(data => data.Tenmenu == this.ParentName).Capdo;
                            this.addmenu.controls['Idcha'].reset(idcha)
                            this.addmenu.controls['Capdo'].reset(Capdo)
                            this.addmenu.controls['Danhmucid'].reset(this.tesst)
                              this.addmenu.controls['Tinhtrang'].reset(this.trangthaiedit);
                              let tam = this.addmenu.controls['Tenmenu'].value
                              this.addmenu.controls['Tenmenu'].reset(tam.split('-')[tam.split('-').length-1].trim())
                            // console.log(this.addmenu.value)
                              this.serviceMenu.UpdateNhom(this.addmenu.value).subscribe(data=>{
                              this.addmenu.reset();
                              let element: HTMLElement = document.getElementById('modalEditHide') as HTMLElement;
                              element.click();
                              this.lammoi()
                            })
                          }
              }
     }
  }
  nodeClickedDelete($event) {
    this.GetTenmenu = $event.Tenmenu;
    this.GetDuongdan = $event.Duongdan;
    this.Getmenuid = $event.Menuid;
    let element: HTMLElement = document.getElementById('modalDelete') as HTMLElement;
    element.click();
  }
  onDeleteMenu() {
    if (this.Getmenuid != null) {
      this.serviceMenu.DeleteMenu(this.Getmenuid).subscribe(data => {
        this.GetTenmenu = null;
        this.GetDuongdan = null;
        this.Getmenuid = null;
        this.getAllMenuTree();
        this.closeModalDelete();
      });
    }
  }
  closeModalDelete() {
    let element: HTMLElement = document.getElementById('modalDeleteHide') as HTMLElement;
    element.click();
  }
  addmenu = new FormGroup(
    {
      Menuid: new FormControl(),
      Danhmucid: new FormControl(),
      Idcha: new FormControl(),
      Tenmenu: new FormControl(),
      Duongdan: new FormControl(),
      Macode: new FormControl(),
      Capdo: new FormControl(),
      Icon: new FormControl(),
      Thutu: new FormControl(),
      Tinhtrang: new FormControl()
    }
  );
  getAllMenuTree() {
    this.serviceMenu.GetMenu().subscribe(data => {
      this.getmenuTree = data.filter(x => x.Idcha == null);
      this.getmenu = [];
      this.getAllMenu(data);
      this.MenuTree();
    });
  }
  getAllMenu(menu: menu[]) {
    for (let i = 0; i < menu.length; i++) {
      this.getmenu.push(menu[i]);
      if (menu[i].ListMenu.length > 0) {
        for (let j = 0; j < menu[i].ListMenu.length; j++) {
          this.getmenu.push(menu[i].ListMenu[j]);
          if (menu[i].ListMenu[j].ListMenu.length > 0) {
            this.getAllMenu(menu[i].ListMenu[j].ListMenu);
          }
        }
      }
    }
  }
  MenuTree() {
    for (let i = 0; i < this.getmenu.length; i++) {
      if (this.getmenu[i].Capdo > 1) {
        let str = ''
        for (let j = 0; j < this.getmenu[i].Capdo; j++) {
          str += '--';
        }
        this.getmenu[i].Tenmenu = str + this.getmenu[i].Tenmenu;
      }
    }
  }

  menuChildren(menu: menu, i: string) {
    this.getvalue = this.getChildrenTree.filter(x => x.Idcha == menu.Menuid)
    console.log(this.getvalue);
    console.log(menu.Menuid);
    console.log(i);
    const tr = this.renderer.createElement('tr');
    this.renderer.addClass(tr, 'row');
    const td1: HTMLParagraphElement = this.renderer.createElement('td');
    this.renderer.addClass(td1, 'col-sm-1');
    this.renderer.setStyle(td1, 'font-weight', 'bold');
    td1.innerHTML = "abc";
    const td2: HTMLParagraphElement = this.renderer.createElement('td');
    this.renderer.addClass(td2, 'col-sm-1');
    const td3: HTMLParagraphElement = this.renderer.createElement('td');
    this.renderer.addClass(td3, 'col-sm-8');
    this.renderer.setStyle(td3, 'text-align', 'left');
    td3.innerHTML = "---System Admin1";
    // this.renderer.setProperty(td3, 'innerHTML', 'Copy123');
    const td4 = this.renderer.createElement('td');
    this.renderer.addClass(td4, 'col-sm-1');
    const td5: HTMLParagraphElement = this.renderer.createElement('td');
    this.renderer.addClass(td5, 'col-sm-1');
    //td5.innerHTML="click";
    const aedit: HTMLParagraphElement = this.renderer.createElement('a');
    this.renderer.addClass(aedit, 'btn');
    const adelete: HTMLParagraphElement = this.renderer.createElement('a');
    this.renderer.addClass(adelete, 'btn');
    this.renderer.addClass(adelete, 'text-danger');
    const iedit: HTMLParagraphElement = this.renderer.createElement('i');
    this.renderer.addClass(iedit, 'fa');
    this.renderer.addClass(iedit, 'fa-pencil-square-o');
    const idelete: HTMLParagraphElement = this.renderer.createElement('i');
    this.renderer.addClass(idelete, 'far');
    this.renderer.addClass(idelete, 'fa-trash-alt');
    this.renderer.setStyle(idelete, 'margin-left', '15px');
    this.renderer.appendChild(aedit, iedit);
    this.renderer.appendChild(adelete, idelete);
    this.renderer.listen(aedit, 'click', (event) => {
      this.menuChildren(this.getvalue[0], i);
    })
    this.renderer.listen(adelete, 'click', (event) => {
      this.menuChildren(this.getvalue[0], i);
    })
    this.renderer.appendChild(tr, td1);
    this.renderer.appendChild(tr, td2);
    this.renderer.appendChild(tr, td3);
    this.renderer.appendChild(tr, td4);
    this.renderer.appendChild(tr, td5);
    this.renderer.appendChild(td5, aedit);
    this.renderer.appendChild(td5, adelete);
    this.renderer.listen(td3, 'click', (event) => {
      this.menuChildren(this.getvalue[0], i);
    })
    const tbody = document.getElementById(i);
    this.renderer.appendChild(tbody, tr);
  }
  onSubmit() {
    if (this.addmenu.controls['Idcha'].value == null || this.addmenu.controls['Idcha'].value == '') {
      this.addmenu.controls['Capdo'].reset(1);
    }
    this.serviceMenu.AddMenu(this.addmenu.value).subscribe(data => {
      this.getAllMenuTree();
      this.getAlldanhmuc();
      this.close();
     this.addmenu.reset();
    });
  }
  lammoi() {
    this.getAllMenuTree();
  }
  close() {
    let element: HTMLElement = document.getElementById('modalRootClose') as HTMLElement;
    element.click();
  }
  Reset(){
    this.addmenu.reset();
    this.getAllMenuTree();
    this.getAlldanhmuc();
  }
  onEventParentID(parentID: string) {
    if (parentID == 'null') {
      this.addmenu.controls['Capdo'].reset(1);
      this.addmenu.controls['Idcha'].reset();
    }
    else {
      this.addmenu.controls['Idcha'].reset(parentID.split('-')[0].trim());
      this.addmenu.controls['Capdo'].reset(parseInt(parentID.split('-')[1].trim()) + 2);
    }
  }
  onEventTrangThai(trangthai: string) {
    if (trangthai == 'null') {
      this.addmenu.controls['Danhmucid'].reset();
    }
    else {
      this.addmenu.controls['Tinhtrang'].reset(trangthai);
    }
  }
  onEventTrangThaiEdit(trangthai: string){
    this.trangthaiedit=trangthai;
  }
  onEventDanhMuc(iddanhmuc: string) {
    if (iddanhmuc == 'null') {
      this.addmenu.controls['Danhmucid'].reset();
    }
    else {
      this.addmenu.controls['Danhmucid'].reset(iddanhmuc);
    }
  }
  onEventDanhMucEdit(iddanhmuc: string){
      this.tesst=iddanhmuc
  }
  selectValue(value: menu) {
    this.ParentName = value.Tenmenu;
  }
  closeDropDown() {
    this.showDropDown = !this.showDropDown;
  }
  closeDropDownDocument() {
    this.showDropDown = false;
  }
  openDropDown() {
    this.showDropDown = !this.showDropDown;
  }
}
