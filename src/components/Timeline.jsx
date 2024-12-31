import { VscGithubInverted } from "react-icons/vsc";

export default function Timeline(){



    

    return( <section id='timeline' className="flex flex-col py-20 px-5  justify-center  bg-gradient-to-t from-blue-400 "> 
    <div className="w-full">
    <div className="flex flex-col  px-15 py-5" > <h1 className="text-4xl font-bold border-b-4 w-[137px] text-green">Timeline</h1></div>
    
    
    </div>

    <div className = 'w-full  '>
<div className='flex flex-col md:flex-row '>

   
<ol class="relative border-s border-gray-200 dark:border-gray-700">      
<li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-black"></div>
        <time class="mb-1 text-sm font-normal leading-none text-black dark:text-black">2024-Present</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-black">Full Stack Dev intern</h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-black ">Luminar Technolab</p>
       
    </li>            
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-black"></div>
        <time class="mb-1 text-sm font-normal leading-none text-black dark:text-black">2020-2024</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-black">Btech computer science</h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-black ">St joseph's College of engineering and  technology palai</p>
       
    </li>

    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-black"></div>
        <time class="mb-1 text-sm font-normal leading-none text-black dark:text-black">2018-2020</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-black">Plus Two</h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-black ">St Michael Hss kaduthuruthy</p>
       
    </li>
  
</ol>


</div>
    

    </div>
    </section>)
}