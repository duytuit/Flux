import { Component, OnInit, Input, Output, EventEmitter, ElementRef, Renderer2, Renderer, ViewChild } from '@angular/core';
import { menu } from 'src/app/Shareds/models/menu';
import { MenuService } from 'src/app/Shareds/services/menu.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
 styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  @Input() nodes: menu[];

  @Output() emitNodeClickedEdit = new EventEmitter<menu>();

  @Output() emitNodeClickedDelete = new EventEmitter<menu>();
  
  getmenu:menu[]=[];
  getmenuTree:menu[]
  getChildrenTree:menu[];

  constructor(private serviceMenu: MenuService,private renderer:Renderer2, private el: ElementRef) { }
  
  ngOnInit() {
    
  }
  nodeClickedEdit(node: menu) {
    this.emitNodeClickedEdit.emit(node);
  }
  nodeClickedDelete(node: menu) {
    this.emitNodeClickedDelete.emit(node);
  }
  nodeClicked1(node:menu){
    node.isExpanded=!node.isExpanded;
  }
  modalDelete1(node:menu){
    this.emitNodeClickedDelete.emit(node);
  }
  modalEdit1(node:menu){
    this.emitNodeClickedEdit.emit(node);
  }

}
