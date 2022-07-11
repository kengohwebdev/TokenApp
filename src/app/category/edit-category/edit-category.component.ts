import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/interface/category';
import { CategoryService } from 'src/services/category.service';


@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  addCategoryForm:FormGroup;
  category:Category={
    id:0,
    name:'',
    description:''
  }
  isSuccessful:boolean=false;

  constructor(private activatedRoute:ActivatedRoute, private builder:FormBuilder, private categoryService:CategoryService) 
  {
    this.activatedRoute.params.subscribe(p=>{
      this.category.id=p["id"];      
    });
    this.addCategoryForm = builder.group({
      "categoryName":new FormControl('',[]),
      "categoryDescription":new FormControl('',[])
    });
   }

  ngOnInit(): void {
  }

  updateCategory(){   
   
    this.category.name= this.addCategoryForm.value["categoryName"];
    this.category.description=this.addCategoryForm.value["categoryDescription"]
    this.categoryService.updateCategory(this.category).subscribe((data:any)=>{
      this.isSuccessful=true;
    });
  }

}