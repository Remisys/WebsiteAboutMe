import type { NextPage } from 'next'

import Head from 'next/head'
import { useState } from 'react'
import { Education } from '../src/Education'
import { Volunteer } from '../src/Volunteer'
import { WorkingExperience } from '../src/WorkingExperience'
import Button from '../src/button'

export type myType = {
  url:string, 
  text:string
}

const Home: NextPage = () => {
   
  const [urls, ] = useState([
    {url: "https://github.com/Remisys/", text: "Github"}, 
    {url: "https://www.linkedin.com/in/yosef-ian-k-b944411a1/", text: "Linkedin"},
    {url: "https://www.xing.com/profile/YosefIan_Kurniadi/cv", text: "Xing"},
  ]); 
  return (
    <div className=" min-h-screen  flex flex-col items-center " >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className=" top-0   flex flex-row justify-center items-center   w-full text-center bg-white z-50">
        <h1 className=" bg-gradient-to-r from-green-500 to-sky-500 bg-clip-text sm:p-[60px] p-10 font-mono font-black tracking-widest text-transparent xl:text-8xl sm:text-6xl text-4xl">Yosef</h1>
       
      <h1 className=" bg-gradient-to-r from-green-500 to-sky-500 bg-clip-text sm:p-[60px] p-10 font-mono font-black tracking-widest text-transparent xl:text-8xl sm:text-6xl text-4xl">Ian</h1>
      </header>
      <nav className="flex flex-row justify-center items-center w-full grow bg-gradient-to-r from-yellow-300 to-rose-300 py-[100px] m-0 ">
        <div className="flex flex-col items-stretch lg:flex-row justify-center  lg:items-center flex-wrap  w-full  px-10 py-5 ">
          {urls.map( (x, index) => (<Button key={index} url={x.url} text={x.text} />))}
        </div>
      </nav>
     

      <main className="w-full bg-inherit  bg-gradient-to-r from-yellow-300 to-rose-300">
          <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 100" 
             style={{transform: "scale(1,-1)"}}>

          <linearGradient  id="a">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient> 
          <linearGradient  id="b">
            <stop offset="0%" stopColor="#16a34a" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor=" #14b8a6" />
          </linearGradient> 
              {/**<rect width="100%" height="100%" fill="red" /> */}
              <path d={"M 300,0 Q 600,100 800,50 L 800,0 z" } fill="url(#b)"></path>
              <path  d={"M 0,0 v 50  q 200,50 400,-10 q 200,-70 400,-10  v -50 h -800"} fill="url(#a)" ></path>
              
              {/**<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>*/}
              </svg>
              <div className="m-0 w-full bg-gradient-to-r from-purple-500 via-blue-500  to-sky-500  flex flex-col items-center  ">
             
                
              <WorkingExperience />
              <Education />
              <Volunteer />
              </div>
              
     
      </main>
      <footer className="w-full">
      <div className="m-0 pt-20  w-full bg-gradient-to-r from-purple-500 via-blue-500  to-sky-500 flex flex-row  ">
                <h1 className="p-12 sm:text-4xl text-3xl font-medium  text-white lg:p-7 hover:underline-offset-[12px] hover:underline">
                  <a href="mailto:yosef.ian.kurniadi@stud.uni-hannover.de?subject=Hi Yosef">Contact Me</a> 
                </h1>
      </div>
      </footer>
      
    </div>
  )
}

export default Home


