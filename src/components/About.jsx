import Aboutimg from '../assets/About.png';
export default function About(){

    return(<section id='About' className='flex flex-col md:flex-row   bg-gradient-to-b from-blue-400'>
<div className='py-5 md:w-1/2' >

<img className='' src={Aboutimg}/> </div>

<div className='px-5 md:w-1/2 flex justify-center'>
<div className=' flex flex-col justify-center text-[#03045e]'>
<h1 className='  text-4xl text-[#03045e] border-b-4 w-[172px] border-[rgb(85,81,227)]  mb-5 font-bold'>About Me</h1>
<p className='pb-5 '>I'm a highly motivated engineering student with a strong focus on web development.
            My expertise lies in front-end technologies, specifically HTML, CSS, and JavaScript. 
            </p>
<p className='pb-5 '> I also have a solid foundation in Node.js and Express.js. I am passionate about creating interactive and user-friendly web applications and am committed to enhancing my skills in this domain. 
</p>
 <p className='pb-5'>I am eager to leverage my knowledge and enthusiasm as a Front-End Developer to contribute positively to your team and help build exceptional web experiences.</p>           

</div>

</div>

    </section>)
}