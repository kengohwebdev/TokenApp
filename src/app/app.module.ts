import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryModule } from './category/category.module';
import { CustomerModule } from './customer/customer.module';
import { EmployeeModule } from './employee/employee.module';
import { ProductModule } from './product/product.module';
import { RegionModule } from './region/region.module';
import { ShipperModule } from './shipper/shipper.module';
import { VendorModule } from './vendor/vendor.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RegionModule,
    VendorModule,
    CategoryModule,
    CustomerModule,
    ShipperModule,
    EmployeeModule,
    AppRoutingModule,
    LayoutModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
