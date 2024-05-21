import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Expo, gsap, Power3 } from 'gsap'
import Hero from './components/Hero';
import './App.css'
import About from './components/Aboutme';
import Projects from './components/Projects';
function App() {
  const t1 = gsap.timeline()
  const ease = Power3.easeInOut()


  // #f5f0ec;
  return (
    <>
      <div className="bg-[rgb(0 0 0)] overflow-hidden">
        <div className='overflow-hidden bg-[rgb(0 0 0)] p-3'>
          <Header timeline={t1} ease={ease} />
          <Hero timeline={t1} ease={ease} />
        </div>

        <About />
        <Projects/>
      </div>
    </>

  );
}

export default App;
