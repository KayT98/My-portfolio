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
            <a style={{ marginRight: '50px', fontWeight:'bold' }} href="#top">About Me</a>
            <a style={{ marginRight: '50px', fontWeight:'bold' }} href='#skills'>Skills</a>
            <a style={{ marginRight: '50px', fontWeight:'bold' }} href='#projects'>Projects</a>
            <a style={{ marginRight: '50px', fontWeight:'bold' }} href='#contact'>Contact</a>
          </ul>
        </nav>
      </div>
      

    <div id="top">
        <h1 className="text-4xl font-bold text-white"> &nbsp;Hello! My name is Kay Truong</h1>
          <h2 className="text-3xl font-bold">I&apos;m a Frontend Web Developer at Seminaut Inc</h2>
      <p className="text-center font-bold">I graduated from Northeastern State University in Oklahoma, Spring 2022. I&apos;m a hardworking and passionate job seeker with strong organizational skills, with experience in HTML5 & CSS3, JavaScript(ES6), Front End Development and UI Design. Currently, I am working as an intern at Seminaut Inc, 
      where I am gaining valuable experience in software engineering and website development. In my spare time, I am currently focusing on learning new programming languages such as Python, C# and Java, as well as exploring the possibilities of Next.js. 
      I believe that these skills will help me to pursue better opportunities in the future and stay ahead in this constantly evolving industry. 
      Highly motivated and bilingual in Vietnamese and English. Ready and willing to learn anything new to help the team achieve company goals. Superior work ethic and good teamwork, problem solving and organizational skills. 
      I am deeply passionate and excited to see where my passion for software engineering and website development will take me in the future, 
      and I look forward to making a positive impact in the field.


      </p>
        
          <div className={styles.downloadBtn}>
            <a href='Kay Truong Resume.pdf' download><button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Download my resume</button></a>
          </div>

              <h1 id="skills" className="text-3xl font-bold text-white">Skills</h1>
          <div className={styles.skills}>  
            <ul className='font-bold'>     
            <li className='p-1'>•	Working knowledge: HTML5, CSS3, Javascript(ES6), React, Git, TailwindCSS, VS Code, UI Development, Frontend Development, Responsive Web Development, Github, Clickup, Microsoft SQL Server, Gitlab. </li>
            <li className='p-1'>•	Familiar with: SQL/MYSQL, Bootstrap5, NextJS 13, XML, JSON, JQuery, C#, Python, OOP, Typescript, WordPress, Figma, Microsoft Office, SDLC, Photoshop.</li>
            <li className='p-1'>•	Soft skills: Time Management, Creative Thinking, Teamwork, Responsibility, Ability to work under pressure and independently, Flexibility, Problem Solving, Excellent Verbal & Written Communication, Work Ethic, Attention To Detail, Adaptability.</li>
            </ul>     
          </div>

          <h1 id="projects" className="text-3xl font-bold text-white">Guild Gaming/Seminaut Inc Tasks</h1>
          <div className={styles.project}> 
          <ul>
              <li className={styles.li}>Guild Gaming UI Task - Display 5 Badges and All Badges - React & TailwindCSS (Mobile UI)
              <img src={'../5badges.png'} className={styles.img} alt='guildgaming' width={400} height={400}></img>       

              <video className={styles.img} width={400} height={400} controls autoPlay>
                <source src='responsivebadges.mp4' type='video/mp4' />
                  </video> 
              </li>

              <li className={styles.li}>Guild Gaming Monetization Task - Display Price Tiers - React (Front End)
              <img src={'../featuredevents.png'} className={styles.img} alt='guildgaming' width={200} height={150}></img>              
              </li>

              <li className={styles.li}>Guild Gaming UI Task - User Activity Post and Post Modal - React & TailwindCSS (Desktop UI) 
              <img src={'../userpost.png'} className={styles.img} alt='guildgaming' width={550} height={500}></img>
              <img src={'../userpostmodal.png'} className={styles.img} alt='guildgaming' width={350} height={300}></img>    
              </li>
          </ul>
          </div>



              <h1 id="projects" className="text-3xl font-bold text-white">Personal Projects</h1>
          <div className={styles.project}> 
              <ul>
              <li className={styles.li}><Link target="_blank" href='https://kayt98.github.io/pet-pics-api/'>Pet Pics API Fetch - React & CSS3 <FontAwesomeIcon icon={faLink} /></Link></li>
              <img src={'../api.png'} className={styles.img} alt='api' width={350} height={300}></img>
              
              <li className={styles.li}><Link target="_blank" href='https://kayt98.github.io/MorsecodeTranslator/'>Morse Code Translator - HTML5, CSS3 and JavaScript <FontAwesomeIcon icon={faLink} /></Link></li>
              <img src={'../morse.png'} className={styles.img} alt='morse' width={350} height={300}></img>
              
              <li className={styles.li}><Link target="_blank" href='https://kayt98.github.io/discIDchecker/'>Discord ID Checker - HTML5, CSS3 and JavaScript <FontAwesomeIcon icon={faLink} /></Link></li>
              <img src={'../discord.png'} className={styles.img} alt='discord' width={450} height={300}></img>
              
              <li className={styles.li}><Link target="_blank" href='https://github.com/KayT98/WallpaperClock'>Wallpaper Clock - Capstone Project - C# <FontAwesomeIcon icon={faLink} /></Link></li>
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
      <h3>Kay Truong &copy; <span>{copyRightYear()}</span>. &nbsp;All rights reserved. </h3>&nbsp;
      
      <h3> Written in NextJS 13 (TypeScript) and Tailwind.</h3>
    </footer>
    </>
  )
}
