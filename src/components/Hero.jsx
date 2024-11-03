import Heroimg from '../assets/hero.png'
import { AiOutlineTwitter,AiFillInstagram ,AiFillFacebook,AiOutlineGithub } from "react-icons/ai";

export default function Hero(){



    return (
      
        <section className='flex flex-col md:flex-row px-5 py-32   bg-primary justify-center font-HeroFont'>
        <div className='md:w-1/2 flex flex-col'><h1 className=' text-white text-5xl'>Hi,Im<br/> 
         V S <span className='text-black'> NIKHIL </span>
          MAHESWAR
        
        <p className='text-2xl'> Im a Full Stack Developer</p></h1>
      
        <div className='flex py-5 '> 
     
       <a className='pr-5 hover:text-white' href = 'https://www.instagram.com/themadnikki/'><AiFillInstagram size={40}/></a>
       <a className='pr-5 hover:text-white' href = 'https://github.com/Vsnikhilmaheswar'><AiOutlineGithub size={40}/></a>
       <a className='pr-5 hover:text-white' href = '#'><AiOutlineTwitter size={40 }/></a>
</div>
        </div>  
   <img className=' md:w-1/3' src={Heroimg}/>
        </section>
    )
}
