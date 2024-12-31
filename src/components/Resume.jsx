import resumeimg from '../assets/resume.jpg';
import resumeFile from '../assets/resume.pdf'; 
export default function Resume(){
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumeFile;
        link.download = 'example.pdf'; // Name for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };



    return(<section id='resume' className='flex flex-col md:flex-row bg-gradient-to-t from-blue-400'>
<div className='py-5 md:w-1/2 flex md:justify-end justify-center' >

<img className='w-[400px] ' src={resumeimg}/> </div>

<div className='px-5 md:w-1/2 flex justify-center'>
<div className=' flex flex-col justify-center text-black'>
<h1 className='  text-4xl text-black border-b-4 w-[132px] border-[rgb(85,81,227)]  mb-5 font-bold'>Resume</h1>
<p className='pb-5 '><a> <button className='bg-blue-700 text-white text-bold w-36 h-12 rounded' onClick={handleDownload} >Download</button> </a> </p>


 

</div>

</div>

    </section>)
}