
import {RouterModule, Routes } from '@angular/router';
import { NgModule} from '@angular/core';
import { ListCategoryComponent } from './list-category/list-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';


const routes:Routes=[
    {path:'list',component:ListCategoryComponent},
    {path:'add',component:AddCategoryComponent},
    {path:'edit/:id',component:EditCategoryComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)]
})

export class RoutingCategoryModule{

}