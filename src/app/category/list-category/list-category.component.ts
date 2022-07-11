import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/interface/category';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {

  categoryCollection: Category[]=[]
  constructor(private categoryService:CategoryService, private router:Router) { }

  ngOnInit(): void {
    this.getData();
   }
 
   getData(){
     this.categoryService.getAllCategory().subscribe((data)=>{
       this.categoryCollection=data;
     })
   }
 
   editCategory(id:any){
     this.router.navigate(['category/edit/'+id]);
   }
 
 
 
   deleteCategory(id:any){
     this.categoryService.deleteCategory(id).subscribe((d:any)=>{
       this.getData();
     });
   }
 
 }