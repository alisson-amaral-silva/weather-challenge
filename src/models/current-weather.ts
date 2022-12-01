import { Forecast } from './forecast'

export interface CurrentWeather {
  temp: number
  date: string
  time: string
  condition_code: string
  description: string
  currently: string
  cid: string
  city: string
  img_id: string
  humidity: number
  cloudiness: number
  rain: number
  wind_speedy: string
  wind_direction: number
  sunrise: string
  sunset: string
  condition_slug: string
  city_name: string
  forecast: Forecast[]
  cref: string
}
