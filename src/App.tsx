import React, { useRef} from "react";
import { Nav } from "./Components/nav";
import { ProjectCards } from "./Components/ProjectCards";


export default function App () {

  const HomeRef = useRef<HTMLDivElement | null>(null)
  const ProjectsRef = useRef<HTMLDivElement | null>(null)
  const AboutRef = useRef<HTMLDivElement | null>(null)

  const onnav = (linkID: string) => {
    const refs: Record<string, React.RefObject<HTMLDivElement>> = {
      Home: HomeRef,
      About: AboutRef,
      Projects: ProjectsRef
    };

    const sectionRef = refs[linkID] 
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({behavior: "smooth"})
    }
  } 


  return (

    <>
        <Nav onlink={onnav}/>
      <section ref={HomeRef} className="flex flex-col h-screen justify-center items-center">
            <h1>Hello World!</h1>
            <h1 className="text-3xl font-medium">Web Designer & Developer</h1>
          <div className="flex absolute bottom-10 left-10">
            <div className="flex flex-col w-full h-full gap-4">
              
            <button className="flex items-center gap-3">
            <div className="bg-[#383838] w-[34px] h-[34px] rounded-xl flex items-center justify-center">
                <img src='./src/assets/instagram.svg' />
             </div>
           <a href="">Simplyyliam</a>
        </button>
            <button className="flex items-center gap-3">
            <div className="bg-[#383838] w-[34px] h-[34px] rounded-xl flex items-center justify-center">
                <img src='./src/assets/github.svg' />
             </div>
           <a href="https://github.com/" target="_blannk">liam devs</a>
        </button>

            </div>
          </div>
        </section>

        <section ref={AboutRef} className="w-screen h-screen flex justify-center items-center overflow-hidden">
        <div className="absolute top-[60em] right-1">
          <h1 className="text-[13em] font-semibold tracking-[0.39em]  ">About</h1>
          </div>
          <div className="flex items-center justify-center w-[50em] h-[210px] relative left-[5em] top-[6em] ">
            <h1 className="text-[1.5em]  ">Hey! my name is liam and I like to design and create things in both the tech and physical world. I'm here to learn, explore, and ehnace my creativity to its finest. Join me on this amazing journey to discover what my creativity can briing.</h1>
        </div>
          
          <div className=" w-[1173px] h-[1561px] items-center justify-center flex relative top-3">
            <img src="./src/assets/dp.png" alt="" />
          </div>
        </section>

        <section ref={ProjectsRef} className="w-screen h-screen flex flex-col items-center py-20 gap-14">
            <div className="flex flex-col items-center top-20 w-[1280px] h-[13.5em]  ">
              <h1 className="text-[86px] font-medium ">Projects</h1>
              <p className="text-[25px] ">Explore my projects</p>

            </div>
                
              <div className="flex gap-6 w-[1280px] justify-center flex-wrap px-2">
                <ProjectCards  name="Dockly" description="macOS inpsired Dock for windowsu"/>
                <ProjectCards  name="Interaktive" description="A UI library of mine (Just fun components"/>



              </div>

            
        </section>
    </>
    
  )
}