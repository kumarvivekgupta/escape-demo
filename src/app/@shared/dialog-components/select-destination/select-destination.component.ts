import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-select-destination',
  templateUrl: './select-destination.component.html',
  styleUrls: ['./select-destination.component.scss']
})
export class SelectDestinationComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<SelectDestinationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit() {
  }


}
