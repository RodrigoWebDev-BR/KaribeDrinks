import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Share Tech', sans-serif;
        font-size: 1.25rem;
        text-align: center;
    }
    a{
        text-decoration: none;
        color: #ab8ac5;
        font-size: 1.75rem;
    }
    p{
        font-family: 'Inconsolata', monospace;
        font-size: 1.2rem;
        color: #ffffff;
    }
    h6 > a{
        font-family: 'Inconsolata', monospace;
        font-size: 1.35rem;
        text-decoration: none;
        color: #ffffff;
    }
    body{
        background-color: #511a8b;
        color: #e3d7ec;
    }
    h1{
        font-family: 'Share Tech', sans-serif;
        font-size: 2.75rem;        
        color: #e3d7ec;
        text-decoration: none;
        cursor: pointer;
    }
    h2{
        font-family: 'Share Tech', sans-serif;
        font-size: 2rem;      
        color: #ab8ac5;
        text-decoration: none;
        cursor: pointer;
    }
    h3{
        font-family: 'Share Tech', sans-serif;
        color: #ab8ac5;
        font-size: 2rem;  
    }
    h4{
        font-family: 'Share Tech', sans-serif;
        font-size: 1.25rem;        
        color: #ffffff;
        text-decoration: none;
        text-align: left;
    }
    h6{
        font-size: 1.35rem;
        color: #ffffff;
        font-family: 'Inconsolata', monospace;
    }
`

export default GlobalStyle