import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  // Add this import at the top
 



interface WeatherResponse {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  name: string;
}


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey= '57eb7b37c8d8823b3f5548abac84c475';

  constructor(private http:HttpClient) { }

  getWeather(city: string) {
    
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`);
  }

    getCurrentWeather(lat: number, lon: number): Observable<any> {
    return this.http.get(`${this.baseUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric&lang=pt_br`);
  }

  getWeatherByCity(city: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric&lang=pt_br`);
  }
}
