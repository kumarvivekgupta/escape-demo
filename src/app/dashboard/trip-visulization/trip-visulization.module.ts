import { NgModule } from '@angular/core';
import { TripVisulizationComponent } from './trip-visulization.component';
import { CommonModule } from '@angular/common';
import { TripVisulizationRoutingModule } from './trip-visulization-routing.module';


@NgModule({
  declarations: [
    TripVisulizationComponent,
  ],
  imports: [
    CommonModule,
    TripVisulizationRoutingModule

  ],
})
export class TripVisulizationModule {
}
