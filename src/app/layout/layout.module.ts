import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendorModule } from './../vendor/vendor.module';
import { ShipperModule } from './../shipper/shipper.module';
import { RegionModule } from './../region/region.module';
import { ProductModule } from './../product/product.module';
import { CustomerModule } from './../customer/customer.module';
import { CategoryModule } from './../category/category.module';
import { EmployeeModule } from './../employee/employee.module';
import { AppRoutingModule } from './../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutRoutingModule } from './routing-layout.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CategoryModule,
    CustomerModule,
    EmployeeModule,
    ProductModule,
    RegionModule,
    ShipperModule,
    VendorModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    LayoutRoutingModule
  ],
  exports:[],
  bootstrap:[DashboardComponent]
})
export class LayoutModule { }
