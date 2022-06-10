import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  getWeatherData(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.apiUrl, {
      headers: new HttpHeaders()
        .set(environment.HeaderApiHostName, environment.HeaderApiHostValue)
        .set(environment.HeaderApiKeyName, environment.HeaderApiKeyValue),
      params: new HttpParams()
        .set('q', city)
        .set('units', 'metric')
        .set('mode', 'json'),
    });
  }
}
