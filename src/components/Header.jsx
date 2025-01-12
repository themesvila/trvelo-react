import React from 'react'

// import Mainmenu from './Mainmenu'

import sitelogo from '/assets/img/logo.svg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
            <div className="fix-area">
                <div className="offcanvas__info">
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <a href="index.html">
                                        <img src={sitelogo} alt="Trvelo" />
                                    </a>
                                </div>
                                <div className="offcanvas__close">
                                    <button>
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="mobile-menu fix mb-3"></div>                   
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="offcanvas__overlay"></div>
  
            <header id="tr_header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-2 col-md-3 align-self-center">
                            <div className="site_logo">
                                <Link to="/"><img src={sitelogo} alt="Trvelo" /></Link>
                            </div>
                        </div>	

                        <div className="col-xl-10 col-md-9">
                            <div className="header_right d-flex justify-content-end">
                                <nav className="main-menu align-self-center">
                                  
                                </nav>
                                
                                <div className="call_us d-flex align-self-center">
                                    <i className="ph ph-headset align-self-center"></i>
                                    <div className="call_content align-self-center">
                                        <span>Call Us</span>
                                        <a href="tel:+8801546857487">+8801546857487</a>
                                    </div>
                                </div>
                                
                                <a href="#" className="green_btn align-self-center">Login / Register <i className="ph ph-arrow-right"></i></a>
                                <div className="header__hamburger d-xl-none my-auto">
                                    <div className="sidebar__toggle">
                                        <i className="ph ph-list"></i>
                                    </div>
                                </div>							
                            </div>
                        </div>
                    </div>
                </div>
            </header>         

    </div>
  )
}

export default Header
