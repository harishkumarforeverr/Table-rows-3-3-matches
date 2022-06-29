import React from 'react';
import Header from '../../Common/Header/Header';
import Footer from '../HomePage/Footer/Footer';
import ServicesIntroPage from './ServicesIntroPage/ServicesIntroPage';
import ServicesSlider from './ServicesIntroPage/ServicesSlider/ServicesSlider';

const Services = () => {
  return (
    <div>
        <div className='Services_conatiner'>
            <Header/>
            <ServicesIntroPage/>
            <ServicesSlider/>
            <Footer/>
        </div>
    </div>
  )
}

export default Services