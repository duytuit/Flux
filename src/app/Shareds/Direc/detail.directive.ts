import { Directive, Input, HostBinding, HostListener, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';
import { thongke } from '../models/thongke';

@Directive({
  selector: '[appDetail]'
})
export class DetailDirective {

  @Input() detailFlux:thongke;
  //@Output() detailFlux :thongke
 // @Input() highlight: string= 'lime';
  constructor(private elementRef:ElementRef,private renderer:Renderer2) { 

    
  }

 // @HostBinding('style.color') color:string = this.defaultColor;


    @HostListener('mouseenter') mouseover(){
      console.log(this.detailFlux)
    //  this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    //   const DIVcontent = this.renderer.createElement('div');
    //   const DIVhearder = this.renderer.createElement('div');
      
    //     const tr1 = this.renderer.createElement('tr');
    //     this.renderer.addClass(tr1, 'row');
    //     const td1_1: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td1_1, 'col-sm-6');
    //     this.renderer.setStyle(td1_1, 'font-weight', 'bold');
    //     td1_1.innerHTML = "Thời gian tạo:";
    //     const td1_2: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td1_2, 'col-sm-6');
    //     td1_1.innerHTML = this.detailFlux.Thoigiantao;
     
    //     const tr2 = this.renderer.createElement('tr');
    //     this.renderer.addClass(tr2, 'row');
    //     const td2_1: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td2_1, 'col-sm-6');
    //     this.renderer.setStyle(td2_1, 'font-weight', 'bold');
    //     td2_1.innerHTML = "Thời gian hoàn thành:";
    //     const td2_2: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td2_2, 'col-sm-6');
    //     td2_2.innerHTML = this.detailFlux.Thoigianhoanthanh;

    //     const tr3 = this.renderer.createElement('tr');
    //     this.renderer.addClass(tr3, 'row');
    //     const td3_1: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td3_1, 'col-sm-6');
    //     this.renderer.setStyle(td3_1, 'font-weight', 'bold');
    //     td3_1.innerHTML = "Mã hàng:";
    //     const td3_2: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td3_2, 'col-sm-6');
    //     td3_2.innerHTML = this.detailFlux.Mahang;

    //     const tr4 = this.renderer.createElement('tr');
    //     this.renderer.addClass(tr4, 'row');
    //     const td4_1: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td4_1, 'col-sm-6');
    //     this.renderer.setStyle(td4_1, 'font-weight', 'bold');
    //     td4_1.innerHTML = "Mã lot:";
    //     const td4_2: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td4_2, 'col-sm-6');
    //     td4_2.innerHTML = this.detailFlux.Malot;

    //     const tr5 = this.renderer.createElement('tr');
    //     this.renderer.addClass(tr5, 'row');
    //     const td5_1: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td5_1, 'col-sm-6');
    //     this.renderer.setStyle(td5_1, 'font-weight', 'bold');
    //     td5_1.innerHTML = "Độ dày:";
    //     const td5_2: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td5_2, 'col-sm-6');
    //     td5_2.innerHTML = this.detailFlux.Doday;
        
    //     const tr6 = this.renderer.createElement('tr');
    //     this.renderer.addClass(tr6, 'row');
    //     const td6_1: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td6_1, 'col-sm-6');
    //     this.renderer.setStyle(td6_1, 'font-weight', 'bold');
    //     td6_1.innerHTML = "Số lượng:";
    //     const td6_2: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td6_2, 'col-sm-6');
    //     td6_2.innerHTML = this.detailFlux.Soluong;

    //     const tr7 = this.renderer.createElement('tr');
    //     this.renderer.addClass(tr7, 'row');
    //     const td7_1: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td7_1, 'col-sm-6');
    //     this.renderer.setStyle(td7_1, 'font-weight', 'bold');
    //     td7_1.innerHTML = "Độ dày trước:";
    //     const td7_2: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td7_2, 'col-sm-6');
    //     td7_2.innerHTML = this.detailFlux.Dodaytruoc;

    //     const tr8 = this.renderer.createElement('tr');
    //     this.renderer.addClass(tr8, 'row');
    //     const td8_1: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td8_1, 'col-sm-6');
    //     this.renderer.setStyle(td8_1, 'font-weight', 'bold');
    //     td8_1.innerHTML = "Độ dày sau:";
    //     const td8_2: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td8_2, 'col-sm-6');
    //     td8_2.innerHTML = this.detailFlux.Dodaysau;

    //     const tr9 = this.renderer.createElement('tr');
    //     this.renderer.addClass(tr9, 'row');
    //     const td9_1: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td9_1, 'col-sm-6');
    //     this.renderer.setStyle(td9_1, 'font-weight', 'bold');
    //     td9_1.innerHTML = "Xác nhận QL:";
    //     const td9_2: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td9_2, 'col-sm-6');
    //     td9_2.innerHTML = this.detailFlux.Xacnhanql;
     
    //     const tr10 = this.renderer.createElement('tr');
    //     this.renderer.addClass(tr10, 'row');
    //     const td10_1: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td10_1, 'col-sm-6');
    //     this.renderer.setStyle(td10_1, 'font-weight', 'bold');
    //     td10_1.innerHTML = "Xác nhận PQ:";
    //     const td10_2: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td10_2, 'col-sm-6');
    //     td10_2.innerHTML = this.detailFlux.Xacnhanpq;

    //     const tr11 = this.renderer.createElement('tr');
    //     this.renderer.addClass(tr11, 'row');
    //     const td11_1: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td11_1, 'col-sm-6');
    //     this.renderer.setStyle(td11_1, 'font-weight', 'bold');
    //     td11_1.innerHTML = "Ghi chú:";
    //     const td11_2: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td11_2, 'col-sm-6');
    //     td11_2.innerHTML = this.detailFlux.Ghichu;

    //     const tr12 = this.renderer.createElement('tr');
    //     this.renderer.addClass(tr12, 'row');
    //     const td12_1: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td12_1, 'col-sm-6');
    //     this.renderer.setStyle(td12_1, 'font-weight', 'bold');
    //     td12_1.innerHTML = "Trạng thái:";
    //     const td12_2: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td12_2, 'col-sm-6');
    //     td12_2.innerHTML = this.detailFlux.Trangthai;

    //     const tr13 = this.renderer.createElement('tr');
    //     this.renderer.addClass(tr13, 'row');
    //     const td13_1: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td13_1, 'col-sm-6');
    //     this.renderer.setStyle(td13_1, 'font-weight', 'bold');
    //     td13_1.innerHTML = "Mã Flux:";
    //     const td13_2: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td13_2, 'col-sm-6');
    //     td13_2.innerHTML = this.detailFlux.Groupid;

    //     const tr14 = this.renderer.createElement('tr');
    //     this.renderer.addClass(tr14, 'row');
    //     const td14_1: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td14_1, 'col-sm-6');
    //     this.renderer.setStyle(td14_1, 'font-weight', 'bold');
    //     td14_1.innerHTML = "Nhóm ký:";
    //     const td14_2: HTMLParagraphElement = this.renderer.createElement('td');
    //     this.renderer.addClass(td14_2, 'col-sm-6');
    //     td14_2.innerHTML = this.detailFlux.Nhomky;
        
    //     this.renderer.appendChild(tr1, td1_1);
    //     this.renderer.appendChild(tr1, td1_2);
    //     this.renderer.appendChild(tr2, td2_1);
    //     this.renderer.appendChild(tr2, td2_2);
    //     this.renderer.appendChild(tr3, td3_1);
    //     this.renderer.appendChild(tr3, td3_2);
    //     this.renderer.appendChild(tr4, td4_1);
    //     this.renderer.appendChild(tr4, td4_2);
    //     this.renderer.appendChild(tr5, td5_1);
    //     this.renderer.appendChild(tr5, td5_2);
    //     this.renderer.appendChild(tr6, td6_1);
    //     this.renderer.appendChild(tr6, td6_2);
    //     this.renderer.appendChild(tr7, td7_1);
    //     this.renderer.appendChild(tr7, td7_2);
    //     this.renderer.appendChild(tr8, td8_1);
    //     this.renderer.appendChild(tr8, td8_2);
    //     this.renderer.appendChild(tr9, td9_1);
    //     this.renderer.appendChild(tr9, td9_2);
    //     this.renderer.appendChild(tr10, td10_1);
    //     this.renderer.appendChild(tr10, td10_2);
    //     this.renderer.appendChild(tr11, td11_1);
    //     this.renderer.appendChild(tr11, td11_2);
    //     this.renderer.appendChild(tr12, td12_1);
    //     this.renderer.appendChild(tr12, td12_2);
    //     this.renderer.appendChild(tr13, td13_1);
    //     this.renderer.appendChild(tr13, td13_2);
    //     this.renderer.appendChild(tr14, td14_1);
    //     this.renderer.appendChild(tr14, td14_2);

    //     this.renderer.appendChild(DIVcontent, DIVhearder);
    //     this.renderer.appendChild(DIVcontent, tr1);
    //     this.renderer.appendChild(DIVcontent, tr2);
    //     this.renderer.appendChild(DIVcontent, tr3);
    //     this.renderer.appendChild(DIVcontent, tr4);
    //     this.renderer.appendChild(DIVcontent, tr5);
    //     this.renderer.appendChild(DIVcontent, tr6);
    //     this.renderer.appendChild(DIVcontent, tr7);
    //     this.renderer.appendChild(DIVcontent, tr8);
    //     this.renderer.appendChild(DIVcontent, tr9);
    //     this.renderer.appendChild(DIVcontent, tr10);
    //     this.renderer.appendChild(DIVcontent, tr11);
    //     this.renderer.appendChild(DIVcontent, tr12);
    //     this.renderer.appendChild(DIVcontent, tr13);
    //     this.renderer.appendChild(DIVcontent, tr14);

    //     this.renderer.setStyle(DIVcontent, 'font-weight', 'bold');
    //     this.renderer.setStyle(DIVcontent, 'color', 'red');
    //     this.renderer.setStyle(DIVcontent, 'background-color', '#fff');
    //     this.renderer.setStyle(DIVcontent, 'z-index', '1000');
    //     this.renderer.setStyle(DIVcontent, 'position', 'relative');
    //     this.renderer.setStyle(DIVcontent, 'width', '500px');
    //     this.renderer.setStyle(DIVcontent, 'min-height', '200px');

      // this.renderer.addClass(tr, 'row');
      // const td1: HTMLParagraphElement = this.renderer.createElement('td');
      // this.renderer.addClass(td1, 'col-sm-1');
      // this.renderer.setStyle(td1, 'font-weight', 'bold');
      // td1.innerHTML = "abc";
      // const td2: HTMLParagraphElement = this.renderer.createElement('td');
      // this.renderer.addClass(td2, 'col-sm-1');
      // const td3: HTMLParagraphElement = this.renderer.createElement('td');
      // this.renderer.addClass(td3, 'col-sm-8');
      // this.renderer.setStyle(td3, 'text-align', 'left');
      // td3.innerHTML = "---System Admin1";
      // // this.renderer.setProperty(td3, 'innerHTML', 'Copy123');
      // const td4 = this.renderer.createElement('td');
      // this.renderer.addClass(td4, 'col-sm-1');
      // const td5: HTMLParagraphElement = this.renderer.createElement('td');
      // this.renderer.addClass(td5, 'col-sm-1');
      // //td5.innerHTML="click";
      // const aedit: HTMLParagraphElement = this.renderer.createElement('a');
      // this.renderer.addClass(aedit, 'btn');
      // const adelete: HTMLParagraphElement = this.renderer.createElement('a');
      // this.renderer.addClass(adelete, 'btn');
      // this.renderer.addClass(adelete, 'text-danger');
      // const iedit: HTMLParagraphElement = this.renderer.createElement('i');
      // this.renderer.addClass(iedit, 'fa');
      // this.renderer.addClass(iedit, 'fa-pencil-square-o');
      // const idelete: HTMLParagraphElement = this.renderer.createElement('i');
      // this.renderer.addClass(idelete, 'far');
      // this.renderer.addClass(idelete, 'fa-trash-alt');
      // this.renderer.setStyle(idelete, 'margin-left', '15px');
    //  this.color=this.highlight;
    }

    @HostListener('mouseleave') mouseleave(){
      //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
     // this.color=this.defaultColor;
    }
}
