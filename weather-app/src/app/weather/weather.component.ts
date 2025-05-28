import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-weather',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
city: string = '';
weatherData: any ;
loading: boolean = false;
  errorMessage: string = '';

constructor(private weatherService:WeatherService ) { }


searchWeather() {

const url = `http://localhost:3000/api/weather?city=${encodeURIComponent(this.city)}`;

    if (!this.city.trim()) {
      this.errorMessage = 'Please enter a city name';
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Failed to fetch weather data. Please try again.';
        this.loading = false;
        console.error(error);
      }
    });
  }

  getWeatherIcon(iconCode: string): string {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  }

   getTime(timestamp: number): Date {
    return new Date(timestamp * 1000);
  }
}


 

 


