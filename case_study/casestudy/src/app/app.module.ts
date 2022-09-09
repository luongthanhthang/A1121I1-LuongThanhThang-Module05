import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { FacilitiesCreateComponent } from './facilities/facilities-create/facilities-create.component';
import { FacilitiesEditComponent } from './facilities/facilities-edit/facilities-edit.component';
import { FacilitiesListComponent } from './facilities/facilities-list/facilities-list.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';
import { NavigationComponent } from './templates/navigation/navigation.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { IntroComponent } from './templates/intro/intro.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContractCreateComponent,
    ContractListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerListComponent,
    FacilitiesCreateComponent,
    FacilitiesEditComponent,
    FacilitiesListComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
