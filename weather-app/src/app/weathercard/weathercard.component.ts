import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-weathercard',
  imports: [CommonModule],
  templateUrl: './weathercard.component.html',
  styleUrl: './weathercard.component.scss'
})
export class WeathercardComponent {
 @Input() weatherData: any;

  getWeatherIcon(iconCode: string): string {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  }

 getBackgroundClass(): string {
  const weatherMain = this.weatherData.weather[0].main.toLowerCase();
  if (weatherMain.includes('rain')) return 'rain';
  if (weatherMain.includes('clear')) return 'clear';
  if (weatherMain.includes('cloud')) return 'clouds';
  return 'default';
}
}
