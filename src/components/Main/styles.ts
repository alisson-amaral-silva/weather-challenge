import { TextField } from '@mui/material'
import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  background: linear-gradient(
    180deg,
    rgba(255, 115, 0, 1) 0%,
    rgba(255, 115, 0, 1) 35%,
    rgba(255, 201, 0, 1) 100%
  );
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 3rem;

  ${media.greaterThan('large')`
    align-items: center;
    height: 100vh;
  `}
`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 7rem;
  ${media.lessThan('large')`
    font-size: 4rem;
  `}
`

export const Description = styled.h2`
  font-weight: 400;
  font-size: 2.5rem;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`

export const TextFieldWrapper = styled(TextField)`
  width: 35%;
  background-color: #ffff;
  color: black;

  ${media.lessThan('large')`
    width: 100%;
  `}
`
