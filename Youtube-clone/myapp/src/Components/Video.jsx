import React, { useEffect, useState } from 'react'

const Video = () => {

const [item,setItem ] = useState([]);
const url = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyDMd9FNfy10vgfVen8Uz8nkNif_2M7Ph7g e HTTP/1.1';

const handlefunction = async()=>{
    const api =  await fetch(url);
    console.log ( await api.json);
    setItem( await api.json());
}
useEffect(()=>{
    handlefunction()
},[]);


  return (
    <div>Video</div>
  )
}

export default Video