import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../@shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TripVisulizationComponent } from './trip-visulization/trip-visulization.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    DashboardRoutingModule,
    MatDialogModule,
    SharedModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatSelectModule,

  ],
})
export class DashboardModule {
}
