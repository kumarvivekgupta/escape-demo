import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { SelectDestinationComponent } from './dialog-components/select-destination/select-destination.component';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SelectDestinationComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule

  ],
  entryComponents: [SelectDestinationComponent]
})
export class SharedModule {
}
