import { CurrentWeather } from './current-weather'
export interface WeatherBaseResponse {
  by: string
  valid_key: boolean
  results: CurrentWeather
  execution_time: number
  from_cache: boolean
}
