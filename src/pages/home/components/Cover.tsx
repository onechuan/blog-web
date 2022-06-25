import { FC } from 'react'
import styled from 'styled-components'
import LazyLoadImage from '@/components/LazyLoadImage';
import cover from "@/assets/img/dot.png"
import { ICover } from '../interface'

const CoverWrapper = styled.figure`
  position: relative;
  width: 100vw;
  height: 100vh;
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url(${cover});
    background-repeat: repeat;
    opacity: 0.5;
  }
`

interface Props {
  cover: string;
  loading: boolean;
}

const Cover: FC<Props> = ({ cover, loading }) => {
  return (
    <CoverWrapper>
      {
        !loading && (
          <LazyLoadImage src={cover}/>
        )
      }
    </CoverWrapper>
  )
}

export default Cover
