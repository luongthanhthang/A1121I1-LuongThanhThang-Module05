import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ImgSlideComponent} from './img-slide/img-slide.component';
import {ImgSliderComponent} from './img-slider.component';


const routes: Routes = [
  {path: 'slider', component: ImgSliderComponent},
  {path: 'slide', component: ImgSlideComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImgSliderRoutingModule {
}
