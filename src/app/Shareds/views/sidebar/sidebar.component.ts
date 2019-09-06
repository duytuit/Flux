import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { phanquyen } from '../../models/phanquyen';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() Phanquyen: phanquyen[];

  @Output() LogOutClicked= new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
   
  }
  LogOut(){
   this.LogOutClicked.emit();
   this.router.navigate(['MeikoApp']);
  }
}
