// components/Header.js
"use client"
import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const Mubeen = () => {
   const router = useRouter()
  return (
    <header className="header">
      <div className="container">
        {/* Navigation links */}
        <nav className="nav">
          <Link href={"/"} className="nav-link">About</Link>
          <Link  href={"/cv.jpg"} className="nav-link">cv</Link>
        
        
        </nav>

        {/* Logo */}
        <a className="logo">
        <Image src={"/logo.jpg"} alt='king' width={"150"} height={"150"}></Image>
          <span className="logo-text"> portfolio</span>
        </a>

        {/* Button */}
        <div className="button-container">
          <button onClick={()=>router.push("/cv.jpg")} className="button">
            3D cv
          </button>
        </div>
      </div>
    </header>
  );
};

export default Mubeen;
