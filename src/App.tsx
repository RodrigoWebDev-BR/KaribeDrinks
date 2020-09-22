import React from 'react'

import GlobalStyles from './assets/themes/globalStyle'

import Header from './components/Header'
import Image from './components/Image'
import Cards from './components/Cards'
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>
     
      <Header />
      <Image />
      <Cards />       
      <Footer />
     <GlobalStyles /> 
    </React.Fragment>
  )
}

export default App
