import React from 'react';
import abbey from "../images/abbey.jpg";

// add links to pages in app
function AboutPage() {
    return (
        <div className="main-block">
            <h1>About Bullet Journal</h1>
            <div className="about-container">
                <p>At it's most basic, <a href="https://bulletjournal.com/pages/learn" target="_blank" rel="noreferrer">Ryder Carroll's Bullet Journal system</a> is 
                about highly customizeable rapid logging, a method of capturing information as bulleted lists. Traditionally, bullets are tasks, events, 
                and notes, each with their own signifier (bullet symbol) as defined in your key. Your bullets are categorized into collections, which include 
                logs (monthly, weekly, daily, and future) and any other logs and collections you need. </p>
                <br></br>
                <p>Where bullet journaling really shines is task migration. Simply change the bullet to &gt; and move any uncompleted event or task forward (or
                &lt; to move a task you completed earlier than expected). Ryder Carroll stresses customizing his system to your needs and using the most of your
                time, which includes moving tasks and events as you need.</p>
                <br></br>
                <p>If you are artistically inclined, check out bullet journal hashtags on your social media! I've tried to incorporate some design options while keeping
                true to the traditional system in this app, but there are many guides to hand drawing beautiful spreads out there.</p>
            </div>
            <h1 id="about-heading">About Abbey Perini</h1>
            <div className="image-cropper">
                <img className="headshot" src={abbey} alt="headshot of Abbey Perini"></img>
            </div>
            <div className="about-container">
                <p>Abbey has been bullet journaling for 4 years, including making spreads about her journey learning to code and making apps! She's a passionate Full-Stack Web Developer 
                    looking for projects with lots of problems to solve. Check out her <a href="https://www.linkedin.com/in/abigail-perini/" target="_blank" rel="noreferrer">LinkedIn</a>, <a href="https://github.com/abbeyperini" target="_blank" rel="noreferrer">Github</a>, <a href="https://abbeyperini.github.io/portfolio.html" target="_blank" rel="noreferrer">portfolio</a>, <a href="https://twitter.com/AbbeyPerini" target="_blank" rel="noreferrer">Twitter</a>, and <a href="https://abbeyperini.medium.com/" target="_blank" rel="noreferrer">blog</a>!</p>
            </div>
        </div>
    )
}

export default AboutPage;