import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { CityContext, CityContextType } from 'context/capital-context'
import { useContext } from 'react'
import * as S from './styles'
const WeatherDetails = () => {
  const { closeDialog } = useContext(CityContext) as CityContextType

  return (
    <S.Wrapper style={{ color: 'black' }}>
      <S.HeaderWrapper>
        <S.CityWrapper>Niterói, RJ - Brasil</S.CityWrapper>
        <S.CloseButton onClick={closeDialog}>X</S.CloseButton>
      </S.HeaderWrapper>
      <S.TemperatureWrapper>20°C Nublado</S.TemperatureWrapper>
      <S.TemperatureDetailsWrapper>
        <S.BoldContent>
          <ArrowUpwardIcon style={{ color: 'orange', fontSize: '2.5rem' }} />
          25°
        </S.BoldContent>
        <S.BoldContent>
          <ArrowDownwardIcon style={{ color: 'orange', fontSize: '2.5rem' }} />{' '}
          16°
        </S.BoldContent>
        <S.SpecificDetailsWrapper>
          <p>Sensação</p> <S.BoldContent>19°C</S.BoldContent>
        </S.SpecificDetailsWrapper>
      </S.TemperatureDetailsWrapper>
      <S.TemperatureDetailsWrapper>
        <S.SpecificDetailsWrapper>
          <p>Vento</p> <S.BoldContent>18km/h</S.BoldContent>
        </S.SpecificDetailsWrapper>
        <S.SpecificDetailsWrapper>
          <p>Humidade</p> <S.BoldContent>86%</S.BoldContent>
        </S.SpecificDetailsWrapper>
      </S.TemperatureDetailsWrapper>
    </S.Wrapper>
  )
}

export default WeatherDetails
