import React from 'react';
import Apple from '../assets/Pics/apple.png';
import Kiwi from '../assets/Pics/kiwi.png';
import Lemon from '../assets/Pics/lemon.png';
import Leaf from '../assets/Pics/leaf.png';
import Tomato from '../assets/Pics/tomato.png';
import PrimaryButton from './Shared/PrimaryButton';

const Banner = () => {
  return (
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
              service good food in Nigeria, is the answer for those who
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
  );
};

export default Banner;
