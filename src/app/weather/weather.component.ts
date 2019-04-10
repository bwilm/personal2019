import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  apiRoot: string = 'https://api.openweathermap.org/data/2.5/weather?zip=23173,us&units=imperial&APPID=fa7e1ef0864a3e688d1833e791eac17d';
  results: object[];
  loading: boolean;
  weatherInfo: any;
  weatherIcon: string;

  constructor(private http: HttpClient) {

    this.results = [];
    this.loading = true;
  }

  getWeather() {
    return this.http.get(this.apiRoot)
      .toPromise();
  }

  async ngOnInit() {
    try {
      this.weatherInfo = await this.getWeather();
      this.getWeatherIcon();
      this.loading = false;
    }
    catch(error) {
      this.loading = true;
      console.log(error);
    }
  }

  public getWeatherIcon() {

    const weatherCode = this.weatherInfo.weather[0].description.toString();

    switch (weatherCode) {

      case 'clear sky':
        this.weatherIcon = 'wi wi-day-sunny';
        break;

      case 'few clouds':
        this.weatherIcon = 'wi wi-day-sunny-overcast';
        break;

      case 'scattered clouds':
        this.weatherIcon = 'wi wi-day-cloudy';
        break;

      case 'broken clouds':
        this.weatherIcon = 'wi wi-day-cloudy-high';
        break;

      case 'rain':
      case 'moderate rain':
      case 'freezing rain':
      case 'light intensity shower rain':

        this.weatherIcon = 'wi wi-day-rain';
        break;

      case 'shower rain':
      case 'heavy inensity shower rain':
      case 'ragged shower rain':
      case 'shower rain':
      case 'heavy inensity rain':
      case 'very heavy rain':
      case 'extreme rain':

        this.weatherIcon = 'wi wi-day-showers';
        break;

      case 'thunderstorm':
      case 'thunderstorm with light rain':
      case 'thunderstorm with rain':
      case 'thunderstorm with heavy rain':
      case 'light thunderstorm':
      case 'heavy thunderstorm':
      case 'ragged thunderstorm':
      case 'thunderstorm with light drizzle':
      case 'thunderstorm with drizzle':
      case 'thunderstorm with heavy drizzle':

        this.weatherIcon = 'wi wi-day-thunderstorm';
        break;

      case 'snow':
      case 'light snow':
      case 'heavy snow':
      case 'sleet':
      case 'shower sleet':
      case 'light rain and snow':
      case 'rain and snow':
      case 'light shower snow':
      case 'shower snow':
      case 'heavy shower snow':

        this.weatherIcon = 'snowflake icon';
        break;

      case 'smoke':
      case 'haze':
      case 'sand, dust whirls':
      case 'fog':
      case 'sand':
      case 'dust':
      case 'volcanic ash':
      case 'squalls':
      case 'tornado':
      case 'mist':

        this.weatherIcon = 'wi wi-day-haze';
        break;

      case 'light rain':
      case 'light intensity drizzle':
      case 'drizzle':
      case 'heavy intensity drizzle':
      case 'light intensity drizzle rain':
      case 'drizzle rain':
      case 'heavy inensity drizzle rain':
      case 'shower rain and drizzle':
      case 'shower drizzle':
        this.weatherIcon = 'wi wi-day-sprinkle';
        break;

      default:
        this.weatherIcon = 'we wi-farenheit';
        break;
    }
  }
}
