"use client"
import React, { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    // Smooth scrolling
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      const handleClick = e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      };
      anchor.addEventListener('click', handleClick);

      // Cleanup
      return () => anchor.removeEventListener('click', handleClick);
    });

    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));

    // Header scroll effect
    const onScroll = () => {
      const header = document.querySelector('header');
     header.classList.toggle('scrolled', window.scrollY > 100);

    };

    window.addEventListener('scroll', onScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', onScroll);
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div>
      <nav className='navbar'>
        <a href="#home" className="logo">Designer Name Mehandi</a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}
