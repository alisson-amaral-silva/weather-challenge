import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  background-color: #fff;
  margin-top: 6rem;
  height: 25%;
  width: 25%;
  color: black;
  padding: 2rem 0 0 4rem;

  ${media.between('large', 'huge')`
    height: 30%;
    width: 45%;
    padding: 1rem 0 0 2rem;
  `}

  ${media.between('medium', 'large')`
    width: 50%;
    height: 20%;
    padding: 2rem 0 0 1rem;
  `}

  ${media.lessThan('small')`
    width: 100%;
    height: 30%;
    margin-top: 3rem;
    padding: 2rem 0 0 1rem;
  `}
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CityWrapper = styled.p`
  text-align: left;
`

export const CloseButton = styled.button`
  color: orange;
  padding-right: 1rem;
  cursor: pointer;
  font-weight: bold;
  border: none;
  font-size: 2rem;
`

export const TemperatureWrapper = styled.h1`
  text-align: left;
  font-size: 5rem;
  padding-top: 2rem;
  margin-top: 1rem;
`

export const TemperatureDetailsWrapper = styled.div`
  text-align: left;
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`

export const SpecificDetailsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`

export const BoldContent = styled.p`
  font-weight: bold;
  text-align: center;
  align-items: center;
  display: flex;
`
