import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  display: inline-block;
  margin: 2rem;
  padding: 1.75rem;
`
export const Fragment = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`

export default function Footer () {
  return (
    <Container> 
      <Fragment>
        <a href="https://karibedrinks.netlify.app/">karibedrinks.netlify.app</a>
        <h1>Karibe Drink's</h1>
        <h3>Since 2020</h3>
        <h6>Website criado e desenvolvido por <a href="https://rodrigowebdev.com.br/">Rodrigo Cruz Candido</a></h6>
        <a href="https://rodrigowebdev.com.br/" target="https://rodrigowebdev.com.br/">rodrigowebdev.com.br</a>  
      </Fragment>  
    </Container>
  )
}

