import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { ListVendorComponent } from './list-vendor/list-vendor.component';
import { RouterModule,Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { EditVendorComponent } from './edit-vendor/edit-vendor.component';

const routes:Routes=[

    {path:'list', component:ListVendorComponent},
    {path:'add', component: AddVendorComponent},
    {path:'edit/:id', component:EditVendorComponent}
]


@NgModule(
    {
        imports :[RouterModule.forChild(routes)]
    }
)

export class RoutingVendorModule{

}