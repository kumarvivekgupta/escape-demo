import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripVisulizationComponent } from './trip-visulization/trip-visulization.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    // children: [
    //   {
    //     path: '',
    //     loadChildren: () =>
    //       import('./trip-visulization/trip-visulization.module').then(
    //         m => m.TripVisulizationModule
    //       ),
    //   }
    // ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
