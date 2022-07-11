import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccountService } from 'src/services/account.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RoutingAccountModule } from './routing-account.module';
import { TokenInterceptor } from 'src/interceptors/token.interceptor';




@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    RoutingAccountModule
  ],
  providers:[AccountService,
  
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor,multi:true}]

})
export class AccountModule { }
