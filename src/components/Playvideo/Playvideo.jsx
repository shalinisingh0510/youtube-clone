import React, { useEffect, useState } from 'react'
import './Playvideo.css'
import Video from "../../assets/video.mp4"
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import Share from '../../assets/share.png'
import Save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import {API_key, value_converter } from '../../data'
import moment from 'moment'








const Playvideo = ({videoId}) => {
    const [apiData,setApiData]= useState(null);
    const [channelData,setChannelData] =useState(null);
    const fetchVideoData =async () =>{
        // fetching Videos Data
        const videoDetails_url = ``
        await fetch(videoDetails_url).then(res=>res.json()).then(data =>setApiData(data.item[0]));
    }
    const fetchotherData =async () =>{
        //fetching channel Data
        const channelData_url =``
    }

    useEffect(()=>{
        fetchVideoData();

    },[])
  return (
    <div className='playvideo'>
        {/*video src={Video} controls autoPlay muted*/}
        <iframe width="996" height="560" src=""></iframe>..
        <h3>{apiData?apiData.snippet.title:"Title here"}</h3>
        <div className="play-video-info">
            <p>{apiData?value_converter(apiData.statistics.viewcount):"16k"} Views &bull;moment(apiData.snippet.publishedAt).fromNow</p>
            <div>
                <span><img src={like} alt="" />{apiData? value_converter(apiData.statistics.likecount):155}</span>
                <span><img src={dislike} alt="" /></span>
                <span><img src={Share} alt="" />share</span>
                <span><img src={Save} alt="" />save</span>
            </div>
        </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
            <p>{apiData?apiData.snippet.channelTItle:""}</p>
            <span>1M subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apiData?apiData.snippet.description:"Description Here"} </p>
        
        <hr />
        <h4>{apiData?value_converter(apiData.statistics.commentscount):102} comments</h4>
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
