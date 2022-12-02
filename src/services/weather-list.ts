import api from './weather'

const cityInfo = async (city: string) =>
  await api.get('/weather', {
    params: {
      appid: process.env.NEXT_PUBLIC_API_KEY,
      lang: 'pt-br',
      q: city
    }
  })

export default cityInfo
