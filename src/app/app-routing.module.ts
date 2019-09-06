import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Shareds/views/home/home.component';
import { QlComponent } from './Components/ql/ql.component';
import { FluxComponent } from './Components/flux/flux.component';
import { PqComponent } from './Components/pq/pq.component';
import { MenuComponent } from './Components/menu/menu.component';
import { DanhmucComponent } from './Components/danhmuc/danhmuc.component';
import { UsernhomComponent } from './Components/usernhom/usernhom.component';
import { PhanquyenComponent } from './Components/phanquyen/phanquyen.component';
import { NhomkyComponent } from './Components/nhomky/nhomky.component';
import { ThongtinComponent } from './Shareds/views/thongtin/thongtin.component';
import { ThongkeComponent } from './Components/thongke/thongke.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'flux',
        component: FluxComponent
      },
      {
        path: 'ql',
        component: QlComponent
      },
      {
        path: 'pq',
        component: PqComponent
      },
      {
        path: 'menu',
        component: MenuComponent
      },
      {
        path: 'danhmuc',
        component: DanhmucComponent
      },
      {
        path: 'usernhom',
        component: UsernhomComponent
      },
      {
        path: 'phanquyen',
        component: PhanquyenComponent
      },
      {
        path: 'nhomky',
        component: NhomkyComponent
      },
      {
        path: 'thongtin',
        component: ThongtinComponent
      },
      {
        path: 'thongke',
        component: ThongkeComponent
      }
    ]
  },
  {
    path: 'administratordanhmuc',
    component: DanhmucComponent
  },
  {
    path: 'administratormenu',
    component: MenuComponent
  },
  {
    path: 'administratorphanquyen',
    component: PhanquyenComponent
  },
  {
    path: 'administratorthongke',
    component: ThongkeComponent
  },
  {
    path: 'administratornhomky',
    component: NhomkyComponent
  },
  {
    path: 'administratorusernhomky',
    component: UsernhomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
