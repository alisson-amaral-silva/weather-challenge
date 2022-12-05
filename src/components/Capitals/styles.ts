import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${media.lessThan('large')`
      width: 80%;
      display: grid;
      grid-auto-rows: 0.1fr 0.1fr 0.7fr;
      height: 50%;
  `}

  ${media.between('medium', 'large')`
      grid-auto-rows: 0.1fr 0.1fr 0.1fr;
  `}
  width: 30%;
  height: 40%;
`

export const Line = styled.hr`
  border-top: 1px solid white;
  width: 35%;
  margin: 2rem;
  ${media.lessThan('large')`
    width: 100%;
    margin: 2rem 0 2rem 0;
  `}
`

export const HeadingWrapper = styled.h1`
  color: #ffff;
  text-align: left;
  margin-bottom: 2rem;
`

export const HeaderWrapper = styled.div`
  display: flex;
  gap: 21rem;

  ${media.between('large', 'huge')`
    gap: 11rem;
  `}
`

export const ThermalWrapper = styled.div`
  display: flex;
  gap: 1rem;
  color: black;
`

export const ThermalColumnWrapper = styled.div`
  display: flex;
  gap: 1rem;
  color: black;

  ${media.lessThan('large')`
    display: none;
  `}
`

export const CityListWrapper = styled.div`
  ${media.greaterThan('large')`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `}
`

export const CityWrapper = styled.div`
  display: flex;
  gap: 2rem;
  ${media.lessThan('small')`
    gap: 2.2rem;
  `}

  ${media.between('large', 'huge')`
    gap: 1rem;
  `}
  margin-top: 1rem;
  color: black;
  font-weight: bold;
`
