import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='flex justify-between mx-24 ml-20 mt-20'>
    <div className="logo text-gray-400">
      <img className='inline-block mr-4' src="" alt="logo" />
       <span >your dream job</span>
    </div>
    <div className="content">
      <ul className='flex gap-5 font-medium text-gray-400'>
        <li >Jobs</li>
        <li>Resources</li>
        <li>Employers</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul>
    </div>
    <div className="photos flex gap-2">
      <img src="/facebook.png" width={30} alt="" />
      <img src="/instagram.png"width={30} alt="" />
      <img src="/linkedin.png" width={30} alt="" />
      <img src="/twitter.jpg" width={30} alt="" />
    </div>
    </div>
    <br/>
    <div className="footerline ml-16 w-11/12 h-px bg-gray-500"></div>
    <br/>
    <div className='flex justify-between mx-20 '>
      <p className='text-gray-400'>&copy; 2024 All Right Reserved</p>
      <div className='flex '>
        <ul className='flex gap-8 font-medium  text-gray-400'>
          <li>Terms of Service</li>
          <li>Policy Service</li>
          <li>Cookie Service</li>
          <li>Partners</li>
        </ul>
      </div>
    </div>
    <br />
    <br />
    </footer>
  )
                 
}

export default Footer