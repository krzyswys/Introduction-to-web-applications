import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourModuleComponent } from './tour-module/tour-module.component';

const routes: Routes = [
  {path: 'tour-module', component: TourModuleComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






