import { Component, OnInit } from '@angular/core';
import { SelectDestinationComponent } from './@shared/dialog-components/select-destination/select-destination.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'escape-demo';

  constructor() {
  }

  ngOnInit() {
  }
}
