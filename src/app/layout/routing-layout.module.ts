import { RegionModule } from './../region/region.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from 'src/guard/auth-guard.guard';

;

const routes: Routes = [
  {path:'region', loadChildren: () => import('../region/region.module').then(m=>m.RegionModule),canActivate:[AuthGuardGuard], canLoad:[AuthGuardGuard] },
  {path: 'employee', loadChildren: () => import('../employee/employee.module').then(m=>m.EmployeeModule)},
  {path: 'category', loadChildren: () => import('../category/category.module').then(m=>m.CategoryModule)},
  {path: 'vendor', loadChildren: () => import('../vendor/vendor.module').then(m=>m.VendorModule)},
  {path: 'product', loadChildren: () => import('../product/product.module').then(m=>m.ProductModule)},
  {path: 'shipper', loadChildren: () => import('../shipper/shipper.module').then(m=>m.ShipperModule)},
  {path: 'customer', loadChildren: () => import('../customer/customer.module').then(m=>m.CustomerModule)},
  {path:'account', loadChildren:()=> import('../account/account.module').then(m=>m.AccountModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }