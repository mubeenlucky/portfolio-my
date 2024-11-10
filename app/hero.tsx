// components/Section.js
"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Hero = () => {
   const router = useRouter()
  return (
    <section className="section">
      <div className="container2">
        <img 
          className="image" 
          alt="hero" 
          src="/my pic.jpg" 
        />
        <div className="text-container2">
          <h1 className="title">about me</h1>
          <p className="description">



Hello! I'm a passionate **Full-Stack Developer** with a deep love for crafting seamless, scalable, and user-friendly web applications. With experience in both front-end and back-end development, I specialize in building complete web solutions that provide engaging user experiences and meet business needs.

I have hands-on expertise with technologies such as **JavaScript**, **TypeScript**, **React**, **Node.js**, **Express**, **MongoDB**, **SQL**, and **GraphQL**, allowing me to deliver high-quality, dynamic applications from the ground up. Whether it's designing intuitive user interfaces or implementing robust server-side logic, I take pride in ensuring every part of the application works together harmoniously.

I'm also a strong advocate of clean, maintainable code and follow best practices to ensure my projects are not only functional but also scalable and easy to maintain. From building APIs to integrating databases, I bring both creativity and technical expertise to every project I work on.

As a developer, I'm always learning and staying up-to-date with the latest trends and technologies to continuously improve my skill set and deliver modern, efficient solutions. I'm excited about collaborating with other developers and clients to build solutions that solve real-world problems.

Feel free to explore my portfolio, and if you're looking for someone to bring your web project to life, let's connect!

          </p>
          <div className="button-container2">
            <button onClick={()=>router.push("/saim")} className="btn primary-btn">Button</button>
    
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
