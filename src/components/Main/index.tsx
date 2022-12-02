import { AxiosResponse } from 'axios'
import { WeatherBaseResponse } from 'models/weather-base-response'
import { useEffect, useState } from 'react'
import api from 'services/weather'
import { fahrenheitConverter } from 'utils/fahrenheit-converter'
import { CityWeather } from '../../models/city-weather'
import cities from '../Capitals/mock'
import * as S from './styles'

const Main = ({
  title = 'Boilerplate',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}) => {
  const [data, setData] = useState<CityWeather[]>([])
  useEffect(() => {
    const mockedCities: CityWeather[] = []
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
        .finally(() => {
          console.log(data)
        })
        .catch((err) => {
          console.error('ops! ocorreu um erro' + err)
        })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com um código"
      />
    </S.Wrapper>
  )
}

export default Main
