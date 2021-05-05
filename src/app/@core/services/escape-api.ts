import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ShowResponse } from '../responses/show.response';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EscapeApiService {
  private baseUrl = environment.apiBaseUrl;


  constructor(private _http: HttpClient,
              private router: Router) {
  }

  private static _hasToken(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  private static _getToken(): string {
    return localStorage.getItem('auth_token');
  }

  private static _deleteToken(): void {
    localStorage.removeItem('auth_token');
  }

  private static _buildParams(data: any): HttpParams {
    let params = new HttpParams();
    if (data) {
      for (const key of Object.keys(data)) {
        console.log('KEY', key);
        // Beware .append is not mutable operation
        params = params.append(key, data[key]);
      }
    }
    return params;
  }

  get<T>(endPoint: string, useAuthHeaders?: boolean, data?: any, useMetaData: boolean = false): Observable<T> {
    const options = {
      headers: this._buildHeaders(useAuthHeaders)
    };
    console.log(options.headers);
    return this._http.get<T>(this.baseUrl + endPoint, options)
      .pipe(map(res => res),
        catchError(this._handleError.bind(this))
      );
  }

  post<T>(endPoint: string, data: any, useAuthHeaders: boolean): Observable<T> {
    const options = {
      headers: this._buildHeaders(useAuthHeaders),
    };
    return this._http.post<ShowResponse<T>>(this.baseUrl + endPoint, data, options)
      .pipe(map(res => res.data),
        catchError(this._handleError.bind(this))
      );
  }

  put<T>(endPoint: string, data: any, useAuthHeaders: boolean): Observable<T> {
    const options = {
      headers: this._buildHeaders(useAuthHeaders),
    };
    return this._http.put<ShowResponse<T>>(this.baseUrl + endPoint, data, options)
      .pipe(map(res => res.data),
        catchError(this._handleError.bind(this))
      );
  }

  delete<T>(endPoint: string, useAuthHeaders: boolean, data?: any): Observable<T> {
    const options = {
      headers: this._buildHeaders(useAuthHeaders),
    };
    return this._http.delete<ShowResponse<T>>(this.baseUrl + endPoint, options)
      .pipe(map(res => res.data),
        catchError(this._handleError.bind(this))
      );
  }

  uploadFile<T>(endPoint: string, data: File): Observable<T> {
    const formData = new FormData();
    formData.append('image', data);
    console.log(formData);
    let httpHeaders = new HttpHeaders();
    // httpHeaders = httpHeaders.set('Content-Type', 'multipart/form-data');
    httpHeaders = httpHeaders.set('Authorization', `Bearer ${EscapeApiService._getToken()}`);

    const options = {
      headers: httpHeaders
    };
    return this._http.post<ShowResponse<T>>(this.baseUrl + endPoint, formData, options)
      .pipe(map(res => res.data),
        catchError(this._handleError.bind(this))
      );
  }

  private _buildHeaders(useAuthHeaders: boolean): HttpHeaders {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    if (!useAuthHeaders) {
      return httpHeaders;
    }
    httpHeaders = httpHeaders.set('Authorization', `Bearer progtest`);
    return httpHeaders;
  }

  private _handleError(httpErrorResponse: HttpErrorResponse) {
  }

}
