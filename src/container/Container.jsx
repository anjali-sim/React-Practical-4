import React from 'react'
import ContainerStyle from '@src/styled/Container'

function Container(props) {
  return (
    <ContainerStyle>{props.children}</ContainerStyle>
  )
}

export default Container