import api from 'api/weather'
import { useEffect } from 'react'
import * as S from './styles'

const Main = ({
  title = 'Boilerplate',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}) => {
  useEffect(() => {
    console.log(
      'process.env.NEXT_PUBLIC_WEATHER_API_URL ',
      process.env.NEXT_PUBLIC_WEATHER_API_URL
    )
    api
      .get('/weather', {
        params: { key: process.env.NEXT_PUBLIC_API_KEY, format: 'json-cors' }
      })
      .then((response) => console.log(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
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
