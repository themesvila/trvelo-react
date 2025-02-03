import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import counterup from "../demodata/counterup"

  const CounterUp = ()=> {
    const[counterStart, setCounterStart]= useState(false) ;
    
      return (
          <ScrollTrigger onEnter={()=> setCounterStart(true)} onExit={()=> setCounterStart(false)}>
              <section className="counter_up section-padding">	     
                    <div className="container">
                          <div className="row">
                            {counterup.map((item, i) => (
                            
                                <div key={i} className="col-xl-3 col-md-6 col-12 wow fadeInUp">
                                  <div className="counter_item" style={{ backgroundImage:`url(${item.image})` }}>
                                    <i className={item.icon}></i>
                                    <h4><span className="count">{counterStart && <CountUp start={0} end={item.count} />}</span>+</h4>
                                    <p>{item.title}</p>
                                  </div>
                                </div>   
                                                    
                            ))}                    
                        </div>
                    </div>
              </section>
            </ScrollTrigger> 
      )
    
  }


export default CounterUp
