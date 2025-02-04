import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const Video = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <React.Fragment>
      <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpen}
          videoId="5s8fs_j2xlY"
          onClose={() => setOpen(false)} 
        />
      <section className="tr_video text-center wow fadeInUp" style={{ backgroundImage: `url(assets/img/bg/video.jpg)` }}> 
      
        <div className="trv_title"><h1>Travel</h1></div>
        <button className="video_btn text-center" onClick={() => setOpen(true)}>
          <i className="ph ph-play"></i>
        </button>     
      </section>
    </React.Fragment> 
  )
}


export default Video