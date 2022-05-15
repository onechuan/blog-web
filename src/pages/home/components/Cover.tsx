import { FC } from 'react'
import styled from 'styled-components'
import LazyLoadImage from '@/components/LazyLoadImage'
import { ICover } from '../interface'

const Covers = styled.figure`
  position: relative;
  margin-bottom: 3.2rem;
  width: 100vw;
  height: 100vh;

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url('images/dot.png');
    background-repeat: repeat;
    opacity: 0.5;
  }
`

interface Props {
  covers: ICover[]
  loading: boolean
}

const Cover: FC<Props> = ({ covers, loading }) => {
  return (
    <Covers>
    </Covers>
  )
}

export default Cover
