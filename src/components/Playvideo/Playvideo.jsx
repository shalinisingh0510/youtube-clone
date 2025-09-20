import React from 'react'
import './Playvideo.css'
import Video from "../../assets/video.mp4"
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import Share from '../../assets/share.png'
import Save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'








const Playvideo = () => {
  return (
    <div className='playvideo'>
        <video src={Video} controls autoPlay muted></video>
        <h3>Best Youtube Channel to learn Web Development</h3>
        <div className="play-video-info">
            <p>1525 Views &bull;2 days ago</p>
            <div>
                <span><img src={like} alt="" />125</span>
                <span><img src={dislike} alt="" />2</span>
                <span><img src={Share} alt="" />share</span>
                <span><img src={Save} alt="" />save</span>
            </div>
        </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
            <p>GreatStack</p>
            <span>1M subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning Easy</p>
        <p>Subscribe GreatStack to watch more tutorials on web Development</p>
        <hr />
        <h4>130 comments</h4>
        <div className="comments">
            <img src={user_profile} alt="" />
            <div>
                <h3>jack Nicholson<span>1 day ago</span></h3>
                <p>A global computer network providing a variety of information and cc of interconnected network using standardized communication protocols.</p>
                <div className="comments-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
         </div>
      
    </div>
  )
}

export default Playvideo
