import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './myheader';
import {TopNavbar} from './mynavbar';
import {Banner} from './banner';
import { Discription } from './discription';
import { ImgGallary } from './imggallary';
import {Artical} from './Artical';
import { Blog } from './blog';
import {NewArtical} from './newArtical'
import {Footer} from './footer'

import './app.css';


function App() {
  return(
     <>
      <Header />
      <TopNavbar />
      <Banner />
      <Discription/>
      <ImgGallary />
      <Artical/>
      <Blog />
      <NewArtical />
      <Footer />
    
     </>
  )
}


export default App;
