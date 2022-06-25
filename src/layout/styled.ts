import styled from 'styled-components'
import breakpoints from '@/styled/breakpoints'

export const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const MainWrapper = styled.main`
  flex: 1;
  overflow-x: hidden;

  @media only screen and ${breakpoints.device.laptop} {
    margin-top: 3.6rem;
  }
`
