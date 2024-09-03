import React from 'react';
import {FaUser} from 'react-icons/fa';
import BgPolygon from "../assets/Pics/polygon.png";
import Vector from "../assets/Pics/vector-wave.png";
import Apple from '../assets/Pics/apple.png';
import Kiwi from '../assets/Pics/kiwi.png';
import Lemon from '../assets/Pics/lemon.png';
import Leaf from '../assets/Pics/leaf.png';
import Tomato from '../assets/Pics/tomato.png';
import PrimaryButton from '../Components/Shared/PrimaryButton';
const Bgstyle = {
  backgroundImage: "url(${BgPolygon})",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  position: "relative",
};

  const About =({HandlePopup}) =>{
  return (
    <>
    <div style={Bgstyle} className='py-14'>
      <div className='container min-h-[500px] relative
       z-10'> 
       <h1 className='pt-20 tracking-wider text-4xl
       font-semibold text-secondary text-center'>
        About Us
       </h1>
      
       {/* {card section} */}
       <div className='bg-slate-400 p-10 my-10'>
         Healthy meal Plan is the best in Nigeria <br />
         when it comes to healthy meal and food delivery
         Our food is top nutch and our services is the best
         we ensure that our customers get the best, because giving the best
         is our prioriy. Trust us with your meal and leave healthy
         Lorem ipsum, dolor sit amet consectetur
       adipisicing elit.
       Aperiam, quisquam repudiandae itaque esse
       nesciunt ducimus aliquam quis nostrum a
       pariatur repellendus sint rerum laborum!
       Corrupti totam rem eligendi nesciunt iste. 
       Lorem ipsum, dolor sit amet consectetur 
       adipisicing elit. Laudantium obcaecati
       minima debitis. Adipisci itaque blanditiis
       cum ipsa iusto vel mollitia in non id 
       provident enim, laboriosam, optio omnis
       eius eos repellat nulla vitae impedit 
       beatae, hic error obcaecati esse quam?
          <div className='pt-10 flex justify-center'>
            <button 
              onClick={HandlePopup}
              className='flex
               justify-center items-center gap-2 
               bg-primary text-xl h-[40px]
               text-white px-5 py-2 hover:scale-105
               duration-300'>
                <FaUser/>
                My Account
               </button>
        </div>
       </div>
      </div>
      {/* {wave sector} */}
      <div className='absolute top-10 right-0 w-full'>
        <img src={Vector}alt="" className='mx-auto bg-slate-950'/>
      </div>
    </div>
    <div className='relative py-14 container'>
      {/* Background fruits pngs */}
      <div className='absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
        <img src={Leaf} alt='Leaf' className='max-w-[160px]' />
      </div>
      <div className='absolute bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
        <img src={Tomato} alt='Tomato' className='max-w-[200px]' />
      </div>
      <div className='absolute -bottom-0 top-2 -right-16 sm:right-20 opacity-50 sm:opacity-100'>
        <img src={Lemon} alt='Lemon' className='max-w-[200px]' />
      </div>
      <div className='hidden sm:block absolute bottom-0 right-0'>
        <img src={Apple} alt='Apple' className='max-w-[200px]' />
      </div>
      <div className='absolute -bottom-4 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100'>
        <img src={Kiwi} alt='Kiwi' className='max-w-[160px]' />
      </div>

      <div className='relative text-center'>
        <h1 className='py-8 tracking-wider text-2xl font-semibold text-dark'>
          Taste The Healthy Difference
        </h1>

        <div className='flex flex-col sm:flex-row justify-between items-center gap-4 py-10'>
          {/* Text content section */}
          <div className='flex-1 px-4'>
            <p className='text-left line-clamp-3 w-auto px-10'>
              We know that{' '}
              <span className='text-primary '>time</span> is the greatest
              value in the modern world. Our healthy meal plan delivery
              service, Good Food in Nigeria, is the answer for those who
              want to eat healthy and delicious meals.
              
            </p>
          </div>
          <div className='flex-1 px-4 '>
            <p className='text-right line-clamp-3 w-auto px-10 '>
              Trust us with your{' '}
              <span className='text-primary'>meal</span>. We are the best
              when it comes to healthy and delicious meals. Good food, they
              say, is better than a doctor. Fresh and Healthy Meal Plan got
              you covered.
            </p>
          </div>
        </div>

        {/* Button section */}
        <div className='flex justify-center mt-10'>
          <PrimaryButton />
        </div>
      </div>
    </div>
    </>

  )
}

export default About