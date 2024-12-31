import Heroimg from '../assets/hero.png'
import { AiOutlineTwitter,AiFillInstagram ,AiFillFacebook,AiOutlineGithub } from "react-icons/ai";

export default function Hero(){



    return (
      
        <section class='flex flex-col md:flex-row px-5 py-14 m-0  bg-primary justify-center font-HeroFont bg-gradient-to-t from-blue-400 ' >
            <div class='md:w-1/2 flex flex-col py-24'><h1 class=' text-[#03045e] text-5xl text-bold'>Hi,Im<br/> 
             V S <span class='text-[#03045e]'> NIKHIL </span>
              MAHESWAR
            <p class='text-2xl'> Im a Full Stack Developer</p></h1>
          
            <div class='flex py-5 '> 
         
           <a class='pr-5 hover:text-white' href = 'https://www.instagram.com/themadnikki/'><AiFillInstagram size={40}/></a>
           <a class='pr-5 hover:text-white' href = 'https://github.com/Vsnikhilmaheswar'><AiOutlineGithub size={40}/></a>
           <a class='pr-5 hover:text-white' href = '#'><AiOutlineTwitter size={40}/></a>
    </div>
            </div>  
       <img class=' md:w-1/3' src={Heroimg}/>
            </section>
    )
}
