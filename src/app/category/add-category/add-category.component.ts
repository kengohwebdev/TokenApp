
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/interface/category';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  addCategoryForm:FormGroup;
  category:Category={
    id:0,
    name:'',
    description:''
  }
  isSuccessful:boolean=false;

  constructor(private builder:FormBuilder, private categoryService:CategoryService) 
  {
    this.addCategoryForm = builder.group({

      "categoryName":new FormControl('',[]),
      "categoryDescription":new FormControl('',[])
    });
   }

  ngOnInit(): void {
  }


  saveCategory(){

    this.category.name= this.addCategoryForm.value["categoryName"];
    this.category.description=this.addCategoryForm.value["categoryDescription"]
    this.categoryService.addCategory(this.category).subscribe((data:any)=>{
      this.isSuccessful=true;
    });
  }

}