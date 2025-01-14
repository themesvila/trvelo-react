import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Video extends Component {
  render() {
    return (
        <section className="tr_video text-center wow fadeInUp" style={{ backgroundImage: `url(assets/img/bg/video.jpg)` }}>
            <Link to="https://www.youtube.com/watch?v=5s8fs_j2xlY" className="video_btn"><i className="ph ph-play"></i></Link>
            <div className="trv_title"><h1>Travel</h1></div>
        </section>
    )
  }
}

export default Video