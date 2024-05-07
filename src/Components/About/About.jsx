import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Driven by a deep passion for technology and equipped with extensive knowledge in software development, I am actively seeking opportunities to make an impact in the evolving world of technology.</p>
                    <p>· A simple and minimalist portfolio for developers built with React and TailwindCSS, designed to be clean and fast.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "70%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width: "57%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width: "50%"}}/></div>
                    <div className="about-skill"><p>Tailwind CSS</p><hr style={{width: "60%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HEPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About