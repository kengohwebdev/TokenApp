
import {RouterModule, Routes } from '@angular/router';
import { NgModule} from '@angular/core';
import { ListRegionComponent } from './list-region/list-region.component';
import { AddRegionComponent } from './add-region/add-region.component';
import { EditRegionComponent } from './edit-region/edit-region.component';

const routes:Routes=[
    {path:'list',component:ListRegionComponent},
    {path:'add',component:AddRegionComponent},
    {path:'edit/:id',component:EditRegionComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)]
})

export class RoutingRegionModule{

}