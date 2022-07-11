import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Shipper } from 'src/interface/shipper';

@Injectable({
  providedIn: 'root'
})
export class ShipperService {

  url:string =environment.apiKey+environment.apiControllers.shipper;
  constructor(private httpClient:HttpClient) { }
  
    getAllShipper():Observable<Shipper[]>
    {
     return this.httpClient.get<Shipper[]>(this.url);
    }
  
    addShipper(shipper:Shipper):Observable<any>
    {
      return this.httpClient.post(this.url,shipper);
    }
  
    getShipperById(id:any):Observable<Shipper>{
      return this.httpClient.get<Shipper>(this.url+"/"+id);
    }
  
    updateShipper(shipper:Shipper):Observable<any>
    {
      return this.httpClient.put(this.url,shipper);
    }
   
    
    deleteShipper(id:any):Observable<any>
    {
      return this.httpClient.delete(this.url+"/"+id);
    }
  }