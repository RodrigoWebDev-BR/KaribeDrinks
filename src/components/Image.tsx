import React, { Component } from 'react'
import styled from 'styled-components'

import imgPurpe from '../assets/img/05.jpg'
import imgGreen from '../assets/img/06.jpg'

export const StyledImage = styled.img`
    margin: 0.5rem 0.75rem;
    border: 0.2rem outset;
    cursor: pointer;
   
    @media(max-width: 1440px) {
        height: 750px;
        width: 1280px;
    }
    @media(max-width: 1024px) {
        height: 645px;
        width: 980px;
    }
    @media(max-width: 768px) {
        height: 645px;
        width: 750px;
    }
    @media(max-width: 425px) {
        height: 385px;
        width: 405px; 
    }
    @media(max-width: 375px) {
        height: 333px;
        width: 368px;
    }
    @media(max-width: 320px) {
        height: 290px;
        width: 315px;
    }
`

const images = {
    imgPurpe,
    imgGreen
}

class Image extends Component {
    
    state = {
        open: true
    }
    toggleImage = () => {
        this.setState({ open: ! this.state.open })
    }

    getImageName = () => this.state.open ? 'imgGreen' : 'imgPurpe'

    render(){
        const imageName = this.getImageName()
        return (
            <React.Fragment> 
                <StyledImage src={images[imageName]} onClick={this.toggleImage} onDoubleClick={this.toggleImage} alt='auto' />                  
                <h1>Karibe Drink's</h1>
                <h2>Casa Noturna</h2>
            </React.Fragment>
          )
        }
        
    }

export default Image