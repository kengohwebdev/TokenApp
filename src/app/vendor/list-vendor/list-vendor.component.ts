
import { Vendor } from 'src/interface/vendor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorService } from 'src/services/vendor.service';

@Component({
  selector: 'app-list-vendor',
  templateUrl: './list-vendor.component.html',
  styleUrls: ['./list-vendor.component.scss']
})
export class ListVendorComponent implements OnInit {


  vendorCollection: Vendor[]=[];
  constructor(private vendorService:VendorService, private router:Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.vendorService.getAllVendor().subscribe((data)=>{
      this.vendorCollection=data;
    });
  }

  editVendor(id:any){
    this.router.navigate(['vendor/edit/'+id]);
  }

  deleteVendor(id:any){
    this.vendorService.deleteVendor(id).subscribe((d:any)=>{
      this.getData();
    });
  }

}