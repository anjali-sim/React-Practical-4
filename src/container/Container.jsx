import React from 'react'
import ContainerStyle from '@styled/Container'

function Container(props) {
  return (
    <ContainerStyle>{props.children}</ContainerStyle>
  )
}

export default Container