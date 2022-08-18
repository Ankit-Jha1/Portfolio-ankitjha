import styles from "../../styles/Home.module.css";
// import { useState, useEffect } from "react";
// import AnimatedLetters from "../AnimatedLetters";
import Link from "next/link";

const HomePageContent = () => {
  return (
    <div>
      <div className={styles.Intro}>
        Hello, I am Ankit Jha. <br />
        I'm an aspiring <span className={styles.webdev}>Web Developer</span>
        <br />
        <button className={styles.homeButton}>
          <Link href='about'>About Me</Link>
          </button>
        
        
      </div>
      {/* <div className={styles.grid}>
        <div className={styles.heading}>Technologies I use</div>
        <div className={styles.techUse}>
          <div>HTML5</div>
          <div>CSS3</div>
          <div>Javascript</div>
          <div>ReactJs</div>
          <div>NextJs</div>
          <div>NodeJs</div>
          <div>MongoDB</div>
          <div>Bootstrap</div>
          <div>Jquery</div>
        </div>
      </div> */}
    </div>
  );
};
export default HomePageContent;
