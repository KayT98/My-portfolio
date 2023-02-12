'use client';
import React from 'react';
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


const inter = Inter({ subsets: ['latin'] })

const copyRightYear = () => {
  return new Date().getFullYear()
}

export default function Home() {
  return (
    <>
      <div className={styles.navBar}>
        <h4 className="text-2xl font-extrabold"><a href="#">Kay Truong</a></h4>
        <nav>
          <ul>
            <a style={{ marginRight: '50px' }} href="#top">About Me</a>
            <a style={{ marginRight: '50px' }} href='#skills'>Skills</a>
            <a style={{ marginRight: '50px' }} href='#projects'>Projects</a>
            <a style={{ marginRight: '50px' }} href='#contact'>Contact</a>
          </ul>
        </nav>
      </div>
      

    <div id="top">
        <h1 className="text-4xl font-bold text-white"> &nbsp;Hello! My name is Kay Truong</h1>
          <h2 className="text-3xl font-bold">I&apos;m a Front-End Web Developer at Seminaut Inc</h2>
      <p className="text-center">I graduated from Northeastern State University in Oklahoma, Spring 2022. I was born and raised in Vietnam
        for 14 years before moving to the US. I always curious on how websites were made and after seeing my uncle working on
        his website project, I started to like website development. I&apos;m a hardworking and passionate job seeker with strong organizational skills,
        with experience in HTML5 & CSS3, JavaScript, Front End Development and UI Design, I&apos;m currently learning and working on project with NextJS 13, Tailwind, TypeScript and React. Highly motivated and bilingual in Vietnamese and English.
        Ready and willing to learn anything new to help the team achieve company goals. Superior work ethic and good teamwork, problem solving and organizational skills. Wanting to gain more experience in an
        environment that encourages growth.
      </p>
        
          <div className={styles.downloadBtn}>
            <a href='Kay Truong Resume.pdf' download><button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Download my resume</button></a>
          </div>

              <h1 id="skills" className="text-3xl font-bold text-white">Skills</h1>
          <div className={styles.skills}>  
            <ul>      
              <li>-Programming languages/Frameworks/Libraries: HTML5/HTML/CSS3/CSS, JavaScript(ES6), SQL/MYSQL, Bootstrap5, React, NextJS 13, Tailwind, XML, JSON, JQuery, C# (basic knowledge) </li>
              <li>-Software: Figma, Microsoft Office, Microsoft SQL Server, Visual Studio Code, Git Bash, Github, ClickUp</li>
              <li>-Technical skills: IT (basic knowledge), Computer Building.</li>
              <li>-Soft skills: Time Management, Creative Thinking, Teamworking, Responsibility, Ability to work under pressure, Flexibility, Problem Solving, Excellent Verbal & Written Communication,
                Determining the Structure & Design of Web Pages, Ensuring Web Design is Optimized for Mobile Devices.</li>
            </ul>     
          </div>

              <h1 id="projects" className="text-3xl font-bold text-white">Projects</h1>
          <div className={styles.project}> 
            <ul>
              <li className={styles.li}>Guild Gaming UI Task - Display 5 Badges and Display All Badges When Button Is Clicked - Written in React (Mobile UI)
              <img src={'../5badges.png'} className={styles.img} alt='guildgaming' width={400} height={400}></img>       

              <img src={'../allbadges.png'} className={styles.img} alt='guildgaming' width={250} height={250}></img> 
              </li>

              <li className={styles.li}>Guild Gaming Monetization Task - Display Price Tiers - Written in React (Front End)
              <img src={'../featuredevents.png'} className={styles.img} alt='guildgaming' width={200} height={150}></img>              
              </li>

              <li className={styles.li}>Guild Gaming UI Task - User Activity Post and Post Modal When Button Clicked - Written in React (Desktop UI) 
              <img src={'../userpost.png'} className={styles.img} alt='guildgaming' width={550} height={500}></img>
              <img src={'../userpostmodal.png'} className={styles.img} alt='guildgaming' width={350} height={300}></img>    
              </li>

              <li className={styles.li}><Link target="_blank" href='https://kayt98.github.io/pet-pics-api/'>Pet Pics API Fetch - Written in React <FontAwesomeIcon icon={faLink} /></Link></li>
              <img src={'../api.png'} className={styles.img} alt='api' width={350} height={300}></img>
              
              <li className={styles.li}><Link target="_blank" href='https://kayt98.github.io/MorsecodeTranslator/'>Morse Code Translator - Written in HTML5, CSS3 and Vanilla JS <FontAwesomeIcon icon={faLink} /></Link></li>
              <img src={'../morse.png'} className={styles.img} alt='morse' width={350} height={300}></img>
              
              <li className={styles.li}><Link target="_blank" href='https://kayt98.github.io/discIDchecker/'>Discord ID Checker - Written in HTML5, CSS3 and Vanilla JS <FontAwesomeIcon icon={faLink} /></Link></li>
              <img src={'../discord.png'} className={styles.img} alt='discord' width={450} height={300}></img>
              
              <li className={styles.li}><Link target="_blank" href='https://github.com/KayT98/WallpaperClock'>Wallpaper Clock - Capstone Project - Written in C# <FontAwesomeIcon icon={faLink} /></Link></li>
              <img src={'../clock.png'} className={styles.img} alt='clock' width={450} height={300}></img>              
            </ul>  
          </div>

              <h1 className="text-3xl font-bold text-white">Contact me!</h1>
          <div className={styles.contact} id="contact">
              <ul>
                <Link href="mailto:kaytruong998@yahoo.com"> <FontAwesomeIcon icon={faEnvelope} /></Link>&nbsp;
                <Link target="_blank" href='https://www.linkedin.com/in/kay-truong-158824185/'> <FontAwesomeIcon icon={faLinkedin} /></Link>&nbsp;
                <Link href="tel:9184091206"> <FontAwesomeIcon icon={faPhone} /></Link> 
              </ul>
          </div>
    </div>
    <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-white" />
    <footer>
      <h3>Copyright&copy; <span>{copyRightYear()}</span>. &nbsp;All rights reserved. </h3>&nbsp;
      
      <h3> Written in NextJS 13 and Tailwind.</h3>
    </footer>
    </>
  )
}
