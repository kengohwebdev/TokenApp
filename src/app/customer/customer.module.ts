import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';



@NgModule({
  declarations: [
    ListCustomerComponent,
    AddCustomerComponent,
    EditCustomerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
