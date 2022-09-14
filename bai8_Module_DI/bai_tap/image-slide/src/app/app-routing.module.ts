import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ImgSliderModule} from './img-slider/img-slider.module';


const routes: Routes = [
  // {path: 'slide', loadChildren: () => import('./img-slider/img-slider.module').then(module => module.ImgSliderModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ImgSliderModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
