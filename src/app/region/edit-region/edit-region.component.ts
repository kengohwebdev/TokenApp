import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionService } from 'src/services/region.service';
import { Region } from 'src/interface/region';

@Component({
  selector: 'app-edit-region',
  templateUrl: './edit-region.component.html',
  styleUrls: ['./edit-region.component.scss']
})
export class EditRegionComponent implements OnInit {

  
  addRegionForm:FormGroup;
  region:Region={
    id:0,
    name:''
  }
  isSuccessful:boolean=false;
  constructor(private activatedRoute:ActivatedRoute, private builder:FormBuilder, private regionService:RegionService) 
  {
    this.activatedRoute.params.subscribe(p=>{
      this.region.id=p["id"];      
    });
    this.addRegionForm = builder.group({
      "regionName":new FormControl('',[])
    });
   }

  ngOnInit(): void {
  }

  updateRegion(){   
    this.region.name= this.addRegionForm.value["regionName"];
    this.regionService.updateRegion(this.region).subscribe((data:any)=>{
      this.isSuccessful=true;
    });
  }

}