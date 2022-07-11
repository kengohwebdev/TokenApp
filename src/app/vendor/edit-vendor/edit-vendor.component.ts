import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/interface/vendor';
import { VendorService } from 'src/services/vendor.service';
import { Region } from 'src/interface/region';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.scss']
})
export class EditVendorComponent implements OnInit {

  addVendorForm:FormGroup;
  vendor:Vendor={
    name:'',
    city:'',
    country:'',
    mobile:'',
    emailId:'',
    isActive:true,
    id:0,
    regionId:0
  }


  isSuccessful:boolean=false;


  constructor(private activatedRoute:ActivatedRoute,private builder:FormBuilder, private vendorService:VendorService) 
  {

    this.activatedRoute.params.subscribe(p=>{
      this.vendor.id=p["id"];      
    });
    this.addVendorForm = builder.group({

      "vendorName":new FormControl('',[]),
      "vendorEmailId":new FormControl('',[]),
      "vendorMobile":new FormControl('',[]),
      "vendorCity":new FormControl('',[]),
      "vendorCountry":new FormControl('',[]),
      "vendorIsActive":new FormControl('',[]),
      "vendorRegionId":new FormControl('',[])
  
    })
  }

  ngOnInit(): void {
  }

  updateVendor(){
    this.vendor.name=this.addVendorForm.value["vendorName"];
    this.vendor.emailId=this.addVendorForm.value["vendorEmailId"];
    this.vendor.mobile=this.addVendorForm.value["vendorMobile"];
    this.vendor.city=this.addVendorForm.value["vendorCity"];
    this.vendor.country=this.addVendorForm.value["vendorCountry"];
    this.vendor.regionId=this.addVendorForm.value["vendorRegionId"];
  

    let b = this.addVendorForm.value["vendorIsActive"];
    this.vendor.isActive=true;
    if(b=="1")
    {
      this.vendor.isActive=true;
    }
   
    this.vendorService.updateVendor(this.vendor).subscribe((data:any)=>{
      this.isSuccessful=true;
      console.log(this.addVendorForm);
    });
  }
}