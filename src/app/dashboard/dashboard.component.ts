import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as mapboxgl from 'mapbox-gl';
import { SelectDestinationComponent } from '../@shared/dialog-components/select-destination/select-destination.component';
import { environment } from '../../environments/environment';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { EscapeCityApi } from '../@core/services/city-api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lng = -122.483696;
  lat = 37.833818;
  myForm: FormGroup;
  matchedCities = [];
  destinationOpen = false;
  nextDestination = false;

  constructor(private dialog: MatDialog, private escapeCityApi: EscapeCityApi) {
  }

  ngOnInit() {
    // @ts-ignore
    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl());

  }

  openDestinationSelection() {
    this.destinationOpen = true;
    this.myForm = new FormGroup({});
    for (const item of ['item1']) {
      this.myForm.addControl(item,
        new FormGroup({
          name: new FormControl(),
          productList: new FormArray([])
        })
      );
    }
  }

  onAddProduct(group: AbstractControl) {
    (group.get('productList') as FormArray).push(new FormControl());
  }

  productArray(group: AbstractControl) {
    return group.get('productList') as FormArray;
  }

  removeProduct(group: AbstractControl, index: number) {
    (group.get('productList') as FormArray).removeAt(index);
  }

  onKeyUpDelayed(value: any) {
    // this.escapeCityApi.getCityList().subscribe((res) => {
    //   Object.entries(res).forEach(
    //     ([key, city]) => {
    //       if (city['name'].toString().contains(value.target.value)) {
    //         this.matchedCities.push(city);
    //       }
    //       console.log(city);
    //     }
    //   );
    //
    // });
    // console.log(this.myForm.value);
  }

  completeTrip() {

    const url = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + -122.662323 + ',' + 45.523751 + ';' + -122.303707 + ',' + 45.612333 + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;
    let canvas = this.map.getCanvasContainer();

    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat]
    });

    // this.map.addLayer('route', {
    //   type: 'geojson',
    //   data: {
    //     type: 'Feature',
    //     properties: {},
    //     geometry: {
    //       type: 'LineString',
    //       coordinates: [
    //         [-122.483696, 37.833818],
    //         [-122.483482, 37.833174],
    //         [-122.483396, 37.8327],
    //         [-122.483568, 37.832056],
    //         [-122.48404, 37.831141],
    //         [-122.48404, 37.830497],
    //         [-122.483482, 37.82992],
    //         [-122.483568, 37.829548],
    //         [-122.48507, 37.829446],
    //         [-122.4861, 37.828802],
    //         [-122.486958, 37.82931],
    //         [-122.487001, 37.830802],
    //         [-122.487516, 37.831683],
    //         [-122.488031, 37.832158],
    //         [-122.488889, 37.832971],
    //         [-122.489876, 37.832632],
    //         [-122.490434, 37.832937],
    //         [-122.49125, 37.832429],
    //         [-122.491636, 37.832564],
    //         [-122.492237, 37.833378],
    //         [-122.493782, 37.833683]
    //       ]
    //     }
    //   }
    // });
  }
}
