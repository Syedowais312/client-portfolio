"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import About from "./components/About";
import Gallery from "./components/Gallery";
import Service from "./components/Service";
import Contact from "./components/Contact";

export default function Home() {
  return (
  <>
  <Navbar/>
  <Hero/>
  <About/>
  <Gallery/>
  <Service/>
  <Contact/>
  </>
  );
}
