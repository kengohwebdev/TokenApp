import { RoutingVendorModule } from './routing-vendor.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListVendorComponent } from './list-vendor/list-vendor.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { EditVendorComponent } from './edit-vendor/edit-vendor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { VendorService } from 'src/services/vendor.service';
import { RegionService } from 'src/services/region.service';



@NgModule({
  declarations: [
    ListVendorComponent,
    AddVendorComponent,
    EditVendorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RoutingVendorModule,
    HttpClientModule,
    RouterModule 
  ],
  providers:[VendorService, RegionService]
})
export class VendorModule { }
