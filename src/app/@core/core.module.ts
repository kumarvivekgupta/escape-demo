import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { SharedModule } from '../@shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    SharedModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  exports: [],
  providers: []
})
export class CoreModule {
}

