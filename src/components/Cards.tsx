import React from 'react'
import styled from 'styled-components'

import imgOne from '../assets/img/01.jpg'
import imgTwo from '../assets/img/02.jpg'
import imgThree from '../assets/img/03.jpg'
import imgFor from '../assets/img/04.jpg'
import imgSeven from '../assets/img/07.jpg'
import imgEight from '../assets/img/08.jpg'


export const Container = styled.div ` 
  @media(min-width: 769px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media(max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media(max-width: 425px) {
    display: grid;
    grid-template-columns: 1fr;
  }

`

export const Fragment = styled.div `
  display: block;
  
  @media(max-width: 1440px) {
    height: 475px;
    width: 375px;
    margin: 0.25rem 0.15rem 4.25rem 0.15rem;
    border: 2rem;
    padding: 0.75rem;
  }
  @media(max-width: 1024px) {
    height: 475px;
    width: 375px;
    margin: 0.25rem 0.15rem 4rem 0.15rem;
    border: 2rem;
    padding: 0.75rem;
  }
  @media(max-width: 768px) {
    height: 475px;
    width: 375px;
    margin: 0.15rem 0.1rem 3.75rem 0.1rem;
    border: 2rem;
    padding: 0.75rem;
  }
  @media(min-width: 425px) {
    height: 425px;
    width: 375px;
    margin: 0.15rem 0.1rem 3.5rem 0.1rem;
    border: 2rem;
    padding: 0.75rem;
  }
  @media(max-width: 375px) {
    height: 425px;
    width: 368px;
    margin: 0.1rem 0.1rem 3.25rem 0.1rem;
    border: 2rem;
    padding: 0.75rem;
  }
  @media(max-width: 320px) {
    height: 425px;
    width: 315px;
    margin: 0.1rem 0.1rem 3rem 0.1rem;
    border: 2rem;
    padding: 0.75rem;
  }
  
`

export const Img = styled.img `
  margin: 0.25rem 0.25rem;
  border: 0.2rem outset;
  cursor: pointer;
  
  @media(max-width: 1440px) {
    height: 375px;
    width: 375px;
  }
  @media(max-width: 1024px) {
    height: 375px;
    width: 375px;
  }
  @media(max-width: 768px) {
    height: 375px;
    width: 375px;
  }
  @media(max-width: 425px) {
    height: 475px;
    width: 475px; 
  }
  @media(max-width: 375px) {
    height: 368px;
    width: 368px;
  }
  @media(max-width: 320px) {
    height: 315px;
    width: 315px;
  }
`


const items = [
  {
    id: 1,
    img: imgOne,
    text: "Mauris viverra turpis ac felis blandit, nec suscipit dolor facilisis."
  },
  {
    id: 2,
    img: imgTwo,
    text: "Nulla congue massa at dolor euismod, at porttitor metus accumsan."
  },
  {
    id: 3,
    img: imgThree,
    text: "Etiam ullamcorper nulla in maximus tempus."
  },
  {
    id: 4,
    img: imgFor,
    text: "Cras facilisis orci at enim suscipit tincidunt."
  },
  {
    id: 5,
    img: imgSeven,
    text: "Vivamus id risus cursus, ullamcorper nibh eu, tristique est."
  },
  {
    id: 6,
    img: imgEight,
    text: "Ut mollis risus vel lacinia tincidunt."
  },
  
]

const ListenItems = items.map((item) =>
   <Fragment key={item.id}>
    <Img src={item.img} alt='auto' />
    <h4>{item.text}</h4>
    <br/>
  </Fragment>
)

export default function Cards () {
  return (
    
      <Container>      
          {ListenItems}     
      </Container> 
    
  )
}
