import React from 'react';
import styles from "./pagesStyled/ServicePageStyled.module.css";
import { Player, ControlBar, BigPlayButton } from "video-react";
const ServicePage = () => {
 return (
  <div className={styles.ServicePageContainer}>
   <h1 className={styles.ServicePagePageTitle}> Apple Shop Service Page</h1>
   <Player
    autoPlay
    playsInline
    poster="/assets/poster.png"
    src="https://www.apple.com/105/media/us/iphone-12/2020/7f5b7de7-9f8c-41eb-bf3b-f294773108e6/anim/charge/large.mp4"
   >
    <ControlBar disableCompletely={true} className="my-class" />
    <BigPlayButton position="center" />
   </Player>
  </div>
 );
};

export default ServicePage;