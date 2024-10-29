import './App.css';
import Section from './components/section';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const getRatio = (el: HTMLElement) =>
    window.innerHeight / (window.innerHeight + el.offsetHeight);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray('section');
      console.log('sections', sections);

      sections.forEach((section, i) => {
        const sec = section as HTMLElement;
        const bg = sec.querySelector('.bg') as HTMLElement;
        gsap.fromTo(
          bg,
          {
            backgroundPosition: () =>
              i ? `50% ${-window.innerHeight * getRatio(sec)}px` : '50% 0px',
          },
          {
            backgroundPosition: () =>
              `50% ${window.innerHeight * (1 - getRatio(sec))}px`,
            ease: 'none',
            scrollTrigger: {
              trigger: sec,
              start: () => (i ? 'top bottom' : 'top top'),
              end: 'bottom top',
              scrub: true,
              invalidateOnRefresh: true, // to make it responsive
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <main ref={containerRef}>
      <nav className="fixed top-0 left-0 w-full h-16 bg-black/20 shadow-md z-10">
        <ul className="flex justify-center items-center h-full">
          <li className="mx-4">
            <a href="#1" className="text-white hover:text-blue-500">
              Section 1
            </a>
          </li>
          <li className="mx-4">
            <a href="#2" className="text-white hover:text-blue-500">
              Section 2
            </a>
          </li>
          <li className="mx-4">
            <a href="#3" className="text-white hover:text-blue-500">
              Section 3
            </a>
          </li>
          <li className="mx-4">
            <a href="#4" className="text-white hover:text-blue-500">
              Section 4
            </a>
          </li>
          <li className="mx-4">
            <a href="#5" className="text-white hover:text-blue-500">
              Section 5
            </a>
          </li>
        </ul>
      </nav>
      {Array.from({ length: 5 }, (_, i) => (
        <Section key={i} img={i + 1} />
      ))}
    </main>
  );
}

export default App;
