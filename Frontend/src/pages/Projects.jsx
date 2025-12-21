import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/ResourcesComp/projects/Projectcard.tsx'
import gsap from 'gsap'
import { projects } from '../assets/Projects/AllProject.js'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

  useGSAP(() => {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <div className='lg:p-4 p-2 bg-black w-full min-h-screen'>
      <div className='pt-[45vh] pl-[7vw]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl text-white uppercase leading-none'>
          Projets
        </h2>
      </div>

      <div className='lol mt-20'>
        {projects.map(function (elem, idx) {
          return (
            <div key={idx} className='hero w-full lg:h-212.5 mb-8 flex lg:flex-row flex-col lg:gap-4 gap-2 overflow-hidden'>
              <ProjectCard image1={elem.display1.img} image2={elem.display2.img} nav1={elem.display1.navilik} nav2={elem.display2.navilik}/>
            </div>
          )
        })}
      </div>
      <div className="h-[20vh] w-full"></div>
    </div>
  )
}

export default Projects