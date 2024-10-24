import resumeimg from '../assets/resume.jpg';
export default function Resume(){

    return(<section id='resume' className='flex flex-col md:flex-row bg-secondary'>
<div className='py-5 md:w-1/2 flex md:justify-end justify-center' >

<img className='w-[400px] ' src={resumeimg}/> </div>

<div className='px-5 md:w-1/2 flex justify-center'>
<div className=' flex flex-col justify-center text-white'>
<h1 className='  text-4xl text-white border-b-4 w-[132px] border-[rgb(85,81,227)]  mb-5 font-bold'>Resume</h1>
<p className='pb-5 '><a> <button className='btn-dwn'>Download</button> </a> </p>


 

</div>

</div>

    </section>)
}