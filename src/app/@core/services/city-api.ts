import { Injectable } from '@angular/core';
import { EscapeApiService } from './escape-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EscapeCityApi {
  constructor(private _escapeApiService: EscapeApiService) {
  }

  getCityList(): Observable<any> {
    return this._escapeApiService.get<any>('https://dev.greatescape.co/api/flights/cities/', true);
  }
}
