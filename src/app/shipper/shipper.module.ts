import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListShipperComponent } from './list-shipper/list-shipper.component';
import { AddShipperComponent } from './add-shipper/add-shipper.component';
import { EditShipperComponent } from './edit-shipper/edit-shipper.component';



@NgModule({
  declarations: [
    ListShipperComponent,
    AddShipperComponent,
    EditShipperComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShipperModule { }
