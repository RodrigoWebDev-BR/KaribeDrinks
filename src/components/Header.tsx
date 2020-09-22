import React from 'react'
import styled from 'styled-components'

export const Container = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`
export const List = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const ListenItems = styled.div `
  background-color: #e3d7ec;
  color: #511a8b;
  font-size: 1.25rem;
  width: 180px;
  margin: 0.75rem 0.75rem;
  padding: 0.25rem 0.25rem; 
  border-radius: 0.5rem;
  border: 0.25rem outset;
  cursor: pointer; 

  @media(max-width: 375px) {
    width: 280px;
  }
`

const Nav = ["Home Page", "A Boate", "Eventos", "Drink' s", "Localização", "Contato"]

const navMenu = Nav.map((item) =>
    <ListenItems onMouseMove={changeColors} onMouseOut={returnColors}>{item}</ListenItems>
)

function changeColors(e: any) {
  e.target.style.background = '#511a8b'
  e.target.style.color = '#e3d7ec'
}

function returnColors(e: any) {
  e.target.style.background = '#e3d7ec'
  e.target.style.color = '#511a8b'
}

export default function Header() {
  return (
    <Container>         
        <List>
          {navMenu}    
        </List>
    </Container>
  )
}

