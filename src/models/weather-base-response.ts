import { Clouds } from './clouds'
import { Coord } from './coord'
import { CurrentWeather } from './current-weather'
import { MainWeather } from './main-weather'
import { Sys } from './sys'
import { Wind } from './wind'

export interface WeatherBaseResponse {
  coord: Coord
  weather: CurrentWeather[]
  base: string
  main: MainWeather
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}
