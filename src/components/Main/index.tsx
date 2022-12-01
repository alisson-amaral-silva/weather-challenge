import { AxiosResponse } from 'axios'
import { WeatherBaseResponse } from 'models/weather-base-response'
import { useEffect, useState } from 'react'
import api from 'services/weather'
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
            key: process.env.NEXT_PUBLIC_API_KEY,
            format: 'json-cors',
            city_name: encodeURI(element)
          }
        })
        .then((response: AxiosResponse<WeatherBaseResponse>) => {
          mockedCities.push({
            city_name: response.data.results.city_name,
            weather: {
              max: response.data.results.forecast[0].max,
              min: response.data.results.forecast[0].min
            }
          })
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
