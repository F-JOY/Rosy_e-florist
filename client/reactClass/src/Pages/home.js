import React, { Component } from 'react'
import Slider from '../Components/slider'
import Text from '../Components/text'
import Rates from '../Components/rates'
export default class Home extends Component {
  render() {
    return (
      <>
    
      <Slider/>
      <div className="section-devider"></div>
      <Text/> 
      <div className="section-devider"></div>
      <Rates/>
      <div className="section-devider"></div>
       </>
    )
  }
}
