import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRegionComponent } from './list-region/list-region.component';
import { RoutingRegionModule } from './routing-region.module';
import { AddRegionComponent } from './add-region/add-region.component';
import { EditRegionComponent } from './edit-region/edit-region.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegionService } from 'src/services/region.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/interceptors/token.interceptor';





@NgModule({
  declarations: [
    ListRegionComponent,
    AddRegionComponent,
    EditRegionComponent
  ],
  imports: [
    CommonModule,
    RoutingRegionModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers:[RegionService,
  
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor,multi:true}]
})
export class RegionModule { }
