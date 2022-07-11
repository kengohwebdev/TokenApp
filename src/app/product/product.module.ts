import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';



@NgModule({
  declarations: [
    ListProductComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
