import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe],
})
export class AppComponent implements OnInit {
  myDate = new Date();
  constructor(
    private weatherService: WeatherService,
    private datePipe: DatePipe
  ) {}

  // ?: means that the variable may be null
  weatherData?: WeatherData;
  cityName: string = 'Jakarta';
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (data) => {
        this.weatherData = data;
        console.log(this.weatherData);
      },
    });
  }

  title = 'weather-app';
}
