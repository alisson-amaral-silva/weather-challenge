import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment } from '@mui/material'
import Capitals from 'components/Capitals'
import * as S from './styles'
const Main = ({ title = 'Previsão do tempo' }) => {
  // const [data, setData] = useState<CityWeather[]>([])
  // useEffect(() => {
  //   const mockedCities: CityWeather[] = []
  //   cities.forEach((element) => {
  //     api
  //       .get('/weather', {
  //         params: {
  //           appid: process.env.NEXT_PUBLIC_API_KEY,
  //           lang: 'pt-br',
  //           q: element
  //         }
  //       })
  //       .then((response: AxiosResponse<WeatherBaseResponse>) => {
  //         mockedCities.push({
  //           city_name: response.data.name,
  //           weather: {
  //             max: fahrenheitConverter(response.data.main.temp_max),
  //             min: fahrenheitConverter(response.data.main.temp_min)
  //           }
  //         })
  //         console.log('mockedCities ', mockedCities)
  //         setData(mockedCities)
  //       })
  //       .finally(() => {
  //         console.log(data)
  //       })
  //       .catch((err) => {
  //         console.error('ops! ocorreu um erro' + err)
  //       })
  //   })
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com um código"
      />
      <S.TextFieldWrapper
        sx={{ input: { color: 'black' } }}
        id="outlined-basic"
        label="Insira aqui o nome da cidade"
        variant="filled"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
      <Capitals />
    </S.Wrapper>
  )
}

export default Main
