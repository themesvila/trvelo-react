import React, { Component } from 'react'

import Hero from '../components/Hero'
import SearchFilter from '../components/SearchFilter'
import Category from '../components/Category'
import About from '../components/About'
import CounterUp from '../components/CounterUp'
import TourFilter from '../components/TourFilter'
import Clients from '../components/Clients'
import Testimonials from '../components/Testimonials'
import Features from '../components/Features'
import Video from '../components/Video'
import Blog from '../components/Blog'
import CTA from '../components/cta'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero/>
        <SearchFilter/>
        <Category/>
        <About/>
        <CounterUp/>
        <TourFilter/>
        <Clients/>
        <Testimonials/>
        <Features/>
        <Video/>
        <Blog/>
        <CTA/>
      </div>
    )
  }
}
