import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxPaginationModule} from "ngx-pagination";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {NavigationComponent} from "./navigation/navigation.component";
import { PackageListComponent } from './package/package-list/package-list.component';
import { PackageCreateComponent } from './package/package-create/package-create.component';
import { PackageUpdateComponent } from './package/package-update/package-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PackageListComponent,
    PackageCreateComponent,
    PackageUpdateComponent
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
