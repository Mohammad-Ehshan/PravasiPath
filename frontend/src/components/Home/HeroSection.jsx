import React from 'react'
import {FaSuitcase,FaBuilding,FaUsers,FaUserPlus} from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id:1,
      title:"155,220+",
      subTitle:"Live Job",
      icons: <FaSuitcase/>
    },
    {
      id:2,
      title:"84,500+",
      subTitle:"Companies",
      icons: <FaBuilding/>
    },
    {
      id:3,
      title:"254,000+",
      subTitle:"Job Seekers",
      icons: <FaUsers/>
    },
    {
      id:4, 
      title:"125,840+",
      subTitle:"Employer",
      icons: <FaUserPlus/>
    }
  ]

  return (
    <>
    <div className="details flex justify-between mx-24 mt-16">{
      details.map(element=>{
        return(
          <div className="card flex items-center gap-3 bg-gray-100 p-1 px-4 rounded-md hover:shadow-md" key={element.id}>
            <div className="icon text-blue-400 text-2xl">{element.icons}</div>
            <div className="content ">
              <p className='font-semibold'>{element.title}</p>
              <p className='text-slate-500 font-medium'>{element.subTitle}</p>
            </div>
          </div>
        )
      })

    }
    
    </div>
    </>
  )
}

export default HeroSection