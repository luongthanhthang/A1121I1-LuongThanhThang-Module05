import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from "./student-list/student-list.component";
import {StudentDetailComponent} from "./student-detail/student-detail.component";
import {ReactiveFormComponent} from "./reactive-form/reactive-form.component";


const routes: Routes = [
  {path:'', component: StudentListComponent},
  {path:'create', component: ReactiveFormComponent},
  {path:'detail/:id', component: StudentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
