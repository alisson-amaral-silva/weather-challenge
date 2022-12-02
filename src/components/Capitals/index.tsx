import { AxiosResponse } from 'axios'
import { CityWeather } from 'models/city-weather'
import { WeatherBaseResponse } from 'models/weather-base-response'
import { useEffect, useState } from 'react'
import api from 'services/weather'
import { fahrenheitConverter } from 'utils/fahrenheit-converter'
import cities from '../Capitals/mock'
import * as S from './styles'

const Capitals = () => {
  const [data, setData] = useState<CityWeather[]>([])
  const mockedCities: CityWeather[] = []
  useEffect(() => {
    cities.forEach((element) => {
      api
        .get('/weather', {
          params: {
            appid: process.env.NEXT_PUBLIC_API_KEY,
            lang: 'pt-br',
            q: element
          }
        })
        .then((response: AxiosResponse<WeatherBaseResponse>) => {
          mockedCities.push({
            city_name: response.data.name,
            weather: {
              max: fahrenheitConverter(response.data.main.temp_max),
              min: fahrenheitConverter(response.data.main.temp_min)
            }
          })
          console.log('mockedCities ', mockedCities)
          setData(mockedCities)
        })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <S.Line />
      <S.Wrapper>
        <S.HeadingWrapper>Capitais</S.HeadingWrapper>
        <S.HeaderWrapper>
          <p>Max</p>
          <p>Min</p>
        </S.HeaderWrapper>
        {data?.map((capital, index) => {
          return (
            <S.CityListWrapper key={index}>
              <S.CityWrapper>
                <p>{capital.weather.max}</p>
                <p>{capital.weather.min}</p>
                <p>{capital.city_name}</p>
              </S.CityWrapper>
            </S.CityListWrapper>
          )
        })}
      </S.Wrapper>
    </>
  )
}

export default Capitals
