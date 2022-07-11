import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoryComponent } from './list-category/list-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { RoutingCategoryModule } from './routing-category.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from 'src/services/category.service';



@NgModule({
  declarations: [
    ListCategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent
  ],
  imports: [
    CommonModule,
    RoutingCategoryModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers:[CategoryService]

})
export class CategoryModule { }
