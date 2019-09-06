import { BrowserModule } from '@angular/platform-browser';
import { NgModule,} from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Shareds/views/home/home.component';
import { SidebarComponent } from './Shareds/views/sidebar/sidebar.component';
import { NhomkyComponent } from './Components/nhomky/nhomky.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from "@angular/http";
import { PagdingComponent } from './Components/pagding/pagding.component';
import { FilterPartNoPipe } from './Shareds/pipes/filter-part-no.pipe';
import { FilterLotNoPipe } from './Shareds/pipes/filter-lot-no.pipe';
import { FilterDropdownComponent } from './Components/filter-dropdown/filter-dropdown.component';
import { FluxComponent } from './Components/flux/flux.component';
import { QlComponent } from './Components/ql/ql.component';
import { PqComponent } from './Components/pq/pq.component';
import { ModalModule } from '../lib/modal';
import { FluxPipe } from './Shareds/pipes/flux.pipe';
import { CustomPagdingComponent } from './Components/custom-pagding/custom-pagding.component';
import { GroupfluxPipe } from './Shareds/pipes/groupflux.pipe';
import { QuytrinhPipe } from './Shareds/pipes/quytrinh.pipe';
import { DialogComponent } from './Shareds/views/dialog/dialog.component';
import { MenuComponent } from './Components/menu/menu.component';
import { DanhmucComponent } from './Components/danhmuc/danhmuc.component';
import { PhanquyenComponent } from './Components/phanquyen/phanquyen.component';
import { UsernhomComponent } from './Components/usernhom/usernhom.component';
import { TreeViewComponent } from './Components/tree-view/tree-view.component';
import { TreePhanquyenComponent } from './Components/phanquyen/tree-phanquyen/tree-phanquyen.component';
import { ThongtinComponent } from './Shareds/views/thongtin/thongtin.component';
import { PagdingUserComponent } from './Components/pagding-user/pagding-user.component';
import { ThongkeComponent } from './Components/thongke/thongke.component';
import { DetailDirective } from './Shareds/Direc/detail.directive';
import { DialogDetailComponent } from './Shareds/views/dialog-detail/dialog-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    NhomkyComponent,
    PagdingComponent,
    FilterPartNoPipe,
    FilterLotNoPipe,
    FilterDropdownComponent,
    FluxComponent,
    QlComponent,
    PqComponent,
    FluxPipe,
    CustomPagdingComponent,
    GroupfluxPipe,
    QuytrinhPipe,
    DialogComponent,
    MenuComponent,
    DanhmucComponent,
    PhanquyenComponent,
    UsernhomComponent,
    TreeViewComponent,
    TreePhanquyenComponent,
    ThongtinComponent,
    PagdingUserComponent,
    ThongkeComponent,
    DetailDirective,
    DialogDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
