import { Component, Inject, OnInit } from '@angular/core';
import { HttpClientService } from '../core/index';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {
  public forecasts: WeatherForecast[];
  public baseUrl: string;
  constructor(
    public http: HttpClientService, 
    @Inject('BASE_URL') baseUrl: string
  ) {
    this.baseUrl = baseUrl;
  }

  async ngOnInit() {
    this.forecasts = await this.http.get<WeatherForecast[]>({url: this.baseUrl + 'api/SampleData/WeatherForecasts', params: null});
  }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
