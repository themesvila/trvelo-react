import React, { Component } from 'react'

export class Video extends Component {
  render() {
    return (
        <section class="tr_video text-center wow fadeInUp" style={{ backgroundImage: `url(assets/img/bg/video.jpg)` }}>
            <a href="https://www.youtube.com/watch?v=5s8fs_j2xlY" class="video_btn"><i class="ph ph-play"></i></a>
            <div class="trv_title"><h1>Travel</h1></div>
        </section>
    )
  }
}

export default Video