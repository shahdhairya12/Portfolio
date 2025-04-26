import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b> Dhairya</b> and I am from Anand , Gujarat , India .<br/>
            I'm a <b>web developer</b> and a final year college student pursuing <b>Diploma Computer Engg</b>. <br/>
            I have done an internship as a <b>Web developer</b> at Charotar Gas Sahakari Mandali Ltd , Anand. <br/>
            I have worked on a few projects using <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b> , <b>BOOSTRAP5</b> and <b>PHP</b>. <br/>
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am a quick learner and I am always looking for new challenges to improve my skills. <br/>
            i have a keen interest in <b>Web Development</b>, <b>Competitive Programming</b> and <b>Machine Learning</b>. <br/>
            <a href="https://www.instagram.com/Shahdhairyah" target='_blank'>Instagram.</a>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        {/* <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' /> */}
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        {/* <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' /> */}
        <Skills skill='Bootstrap'/>
        <Skills skill='Python'/>
        <skills skill='html'/>
        <Skills skill='Bootstrap5'/>

      </div>
    </>
  )
}

export default About