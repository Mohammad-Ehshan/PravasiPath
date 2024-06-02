import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='relative w-screen h-screen'>
      <video autoPlay loop className='h-full w-full object-cover blur-sm'>
        <source src='https://clipchamp.com/static/panda-a2ab3399da3fb66441edb1ffaf182211.mp4' type='video/mp4' />
        <source src='https://clipchamp.com/static/panda-7b2a9b4f4029999e9133add66e313bfe.webm' type='video/webm'/>
      </video>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center'>
        <p className='font-bold text-4xl text-white  mb-4'>Sorry, we cannot find that page! But we found this panda.</p>
       <Link to="/">
        <button type='button' className='text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-full  text-xl px-5 py-3.5 text-center mb-2'>
          Take me Home
        </button>
       </Link>
      </div>
    </div>
  );
}

export default NotFound;
