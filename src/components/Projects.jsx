import websiteimg1 from '../assets/ecommerce-websites.jpg';
import websiteimg2 from '../assets/food-ecommerce.jpg';
import websiteimg3 from '../assets/website-blog.jpg';
export default function Projects(){
    return( <section className="flex flex-col py-20 px-5 text-white justify-center bg-primary"> 
    <div className="w-1/2">
    <div className="flex justify-center pb-5"> <h1 className="text-4xl font-bold border-b-4 w-[137px] border-[#2b2d77]">Projects</h1></div>
    

    </div>

    <div className = 'w-full  '>
<div className='flex px-10 gap-5'>
<div className='relative'> 
    <img  className='h-[200px]' src={websiteimg1}/>
    <div className='project-description'> <p className='text-center py-5'> dsdscddh</p> </div>
</div>

<div  className='relative'>  
    <img className='h-[200px]'  src={websiteimg2}/>
    <div className='project-description'> <p className='text-center py-5'> dsdscddh</p> </div>
</div>

<div  className='relative'>
    <img className='h-[200px]'  src={websiteimg3}/>
    <div className='project-description'> <p className='text-center py-5'> dsdscddh</p> </div>
</div>
   
</div>
    

    </div>
    </section>)
}