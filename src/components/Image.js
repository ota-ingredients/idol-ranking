import React from 'react'
import styled from 'styled-components'

const Image = styled.div`
  background-image: url('https://images.unsplash.com/photo-1483909796554-bb0051ab60ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=15ad7d793b2e1f39c8f17f9073b12652&auto=format&fit=crop&w=500&q=60');
  background-size: cover;
  background-position: center;
  width: ${props => props.width};
  height: ${props => props.height};
  position: relative;
`

const Topic = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  bottom: 0;
  font-size: 20px;
  padding: 20px;
`

const ImageComponent = ({ width, height }) => (
  <Image width={width} height={height}>
    <Topic>Post topic</Topic>
  </Image>
)

export default ImageComponent
