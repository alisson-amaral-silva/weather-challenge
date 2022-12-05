import { AxiosResponse } from 'axios'
import { CityWeather } from 'models/city-weather'
import { WeatherBaseResponse } from 'models/weather-base-response'
import { useEffect, useState } from 'react'
import api from 'services/weather'
import { fahrenheitConverter } from 'utils/fahrenheit-converter'
import cities from './mock'
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
          Promise.all(mockedCities).then((results) => {
            setData(results)
          })
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
          <S.ThermalWrapper>
            <p>Max</p>
            <p>Min</p>
          </S.ThermalWrapper>
          <S.ThermalWrapper>
            <p>Max</p>
            <p>Min</p>
          </S.ThermalWrapper>
        </S.HeaderWrapper>
        <S.CityListWrapper>
          {data?.map((capital, index) => {
            return (
              <div key={index}>
                <S.CityWrapper>
                  <p>{capital.weather.max}</p>
                  <p>{capital.weather.min}</p>
                  <p>{capital.city_name}</p>
                </S.CityWrapper>
              </div>
            )
          })}
        </S.CityListWrapper>
      </S.Wrapper>
    </>
  )
}

export default Capitals
