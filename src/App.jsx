import {Header} from './Components/Header/Header'
import { Hero } from './Components/Header/Hero';
import { About } from './Components/About';
import { Skill } from './Components/Cards/Skill';
import Work  from './Components/Portifólios/Work';
//import Review from './Components/Cards/Review'
import Contact from './Components/Contatos/Contact';
import Footer from './Components/Contatos/Footer';



/*Node Modules*/
import { ReactLenis } from 'lenis/react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/* Register Gsap*/ 
gsap.registerPlugin(useGSAP, ScrollTrigger);

export function App() {
  

  useGSAP (() => {
    const elements = gsap.utils.toArray('.reveal-up')
    elements.forEach((element) => {

      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true
        },
        y: 0,
        duration: 1,
        opacity:1,
        ease: 'power2.out',
      })
    })
  })

  return (
    <ReactLenis root>
    <Header/>
    <main>
        <Hero/>
        <About/>
        <Skill/>
        <Work/>
        
        <Contact/>
    </main>
        <Footer/>
        
    </ ReactLenis>
  );
}