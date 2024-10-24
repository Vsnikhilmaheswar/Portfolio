import websiteimg1 from '../assets/ecommerce-websites.jpg';
import websiteimg2 from '../assets/food-ecommerce.jpg';
import websiteimg3 from '../assets/website-blog.jpg';
export default function Projects(){
    return( <section id='Project' className="flex flex-col py-20 px-5 text-white justify-center bg-primary"> 
    <div className="w-full">
    <div className="flex flex-col  px-15 py-5" > <h1 className="text-4xl font-bold border-b-4 w-[137px] border-[#2b2d77]">Projects</h1></div>
    <p className='font-semibold'>These are some the projects  that,i have build using JavaScript,Nodejs,Html,Css</p>
    <br/>
    </div>

    <div className = 'w-full  '>
<div className='flex flex-col md:flex-row px-15 gap-5'>
<div className='relative'> 
    <img  className='h-[220px] w-[500px]' src={websiteimg1}/>
    <div className='project-description'> 
    <p className='text-center py-5'> dsd scdjjjj jjjj jjjjj jkjgytu ythjjj jjjjjj jjjjuj njnmjmjn mkjjjjjjjjjjjjjjjdh</p> </div>
</div>

<div  className='relative'>  
    <img className='h-[220px] w-[500px]'  src={websiteimg2}/>
    <div className='project-description'> 
    <p className='text-center py-5'> dsdscdsd scdjjj jjjjjj jjjjjkjgytuyt hjjjjjjjjjjjjjujnjnmjmjnmkjjjjjjjjjjjjjjjdhddh</p> </div>
</div>

<div  className='relative'>
    <img className='h-[220px] w-[500px]'  src={websiteimg3}/>
    <div className='project-description'> 
     <p className='text-center px-5 py-5'> dsdscd sdscdjjjjjj jjjjjjjjkjgy tuythj jjjjjjjjj jjjujnjnmjmjnmkjjjjjjjjjjjjjjjdhddh</p> 
</div>

</div>
   
</div>
    

    </div>
    </section>)
}