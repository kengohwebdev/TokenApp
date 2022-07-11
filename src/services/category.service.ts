import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from 'src/interface/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url:string =environment.apiKey+environment.apiControllers.category;
  constructor(private httpClient:HttpClient) { }

  getAllCategory():Observable<Category[]>
  {
   return this.httpClient.get<Category[]>(this.url);
  }

  addCategory(category:Category):Observable<any>
  {
    return this.httpClient.post(this.url,category);
  }

  getCategoryById(id:any):Observable<Category>{
    return this.httpClient.get<Category>(this.url+"/"+id);
  }

  updateCategory(category:Category):Observable<any>
  {
    return this.httpClient.put(this.url,category);
  }
 
  
  deleteCategory(id:any):Observable<any>
  {
    return this.httpClient.delete(this.url+"/"+id);
  }
}