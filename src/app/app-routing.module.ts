import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProgrammesComponent } from './programmes/programmes.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { PlacementComponent } from './placement/placement.component';

import { FormComponent } from './form/form.component';
import { CourseComponent } from './course/course.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [{path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'programmes',component:ProgrammesComponent},
  {path:'facilities',component:FacilitiesComponent},
  {path:'placement',component:PlacementComponent},
  {path:'form',component:FormComponent},
  {path:'course',component:CourseComponent},
  {path:'cart',component:CartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
