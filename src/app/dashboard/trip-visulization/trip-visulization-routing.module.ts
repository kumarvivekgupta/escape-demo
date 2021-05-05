import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TripVisulizationComponent } from './trip-visulization.component';

const route: Routes = [
  {
    path: '',
    component: TripVisulizationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class TripVisulizationRoutingModule {
}
