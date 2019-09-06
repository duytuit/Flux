import { Component, Input, EventEmitter, Output  } from '@angular/core';
import { phanquyen } from 'src/app/Shareds/models/phanquyen';

@Component({
  selector: 'app-tree-phanquyen',
  templateUrl: './tree-phanquyen.component.html',
  styleUrls: ['./tree-phanquyen.component.css']
})
export class TreePhanquyenComponent {

  @Input() nodes: phanquyen[];

  @Output() emitNodeClickedXem = new EventEmitter<phanquyen>();

  @Output() emitNodeClickedThem = new EventEmitter<phanquyen>();

  
  @Output() emitNodeClickedSua = new EventEmitter<phanquyen>();

  @Output() emitNodeClickedXoa = new EventEmitter<phanquyen>();

  nodeClicked1(node:phanquyen){
    node.isExpanded=!node.isExpanded;
  }
  modalXem(node:phanquyen){
    this.emitNodeClickedXem.emit(node);
  }
  modalThem(node:phanquyen){
    this.emitNodeClickedThem.emit(node);
  }
  modalSua(node:phanquyen){
    this.emitNodeClickedSua.emit(node);
  }
  modalXoa(node:phanquyen){
    this.emitNodeClickedXoa.emit(node);
  }
}
