import React from 'react'
import { MdOutlineDesignServices, MdOutlineWebhook, MdAccountBalance, MdOutlineAnimation } from 'react-icons/md'
import { TbAppsFilled } from 'react-icons/tb'
import { FaReact } from "react-icons/fa"
import { GiArtificialIntelligence } from "react-icons/gi"
import { IoGameController } from "react-icons/io5"

const PopularCategories = () => {

  const categories = [
      {
        id: 1,
        title: "Graphics & Design",
        subTitle: "305 Open Positions",
        salary: "N/A",
        icon: <MdOutlineDesignServices />,
        description: "Create visual content using design software and tools."
      },
      {
        id: 2,
        title: "Mobile App Development",
        subTitle: "500 Open Positions",
        salary: "30,000$",
        icon: <TbAppsFilled />,
        description: "Develop and maintain mobile applications for various platforms."
      },
      {
        id: 3,
        title: "Frontend Web Development",
        subTitle: "200 Open Positions",
        salary: "10,000$",
        icon: <MdOutlineWebhook />,
        description: "Design and implement user-facing features for websites."
      },
      {
        id: 4,
        title: "MERN STACK Development",
        subTitle: "1000+ Open Postions",
        salary: "25,000$",
        icon: <FaReact />,
        description: "Build full-stack applications using MongoDB, Express, React, Node."
      },
      {
        id: 5,
        title: "Account & Finance",
        subTitle: "150 Open Positions",
        salary: "12,000$",
        icon: <MdAccountBalance />,
        description: "Manage financial records and provide financial advice."
      },
      {
        id: 6,
        title: "Artificial Intelligence",
        subTitle: "867 Open Positions",
        salary: "45,000$",
        icon: <GiArtificialIntelligence />,
        description: "Develop intelligent systems and algorithms using AI techniques."
      },
      {
        id: 7,
        title: "Video Animation",
        subTitle: "50 Open Positions",
        salary: "8,000$",
        icon: <MdOutlineAnimation />,
        description: "Create animations for videos and multimedia projects."
      },
      {
        id: 8,
        title: "Game Development",
        subTitle: "80 Open Positions",
        salary: "22,000$",
        icon: <IoGameController />,
        description: "Design and develop interactive games for various platforms."
      }
    
  ];

  return (
    <>
      <h1 className="text-4xl font-semibold mt-16 text-center text-pink-500">Recommended For You</h1>
      <div className="boxes grid grid-cols-3 gap-8 m-16">{
        categories.map(element =>{
          return(
              <div className="box rounded-lg  bg-purple-50 h-auto hover:scale-105 transition duration-200 ease-in-out" key={element.id}>
          <div className="upper h-auto ml-10">
          <span className="my-4 text-2xl p-1">{element.icon}</span>
            <h1 className=" heading text-4xl font-semibold leading-snug">
              {element.title}
            </h1>
            <p className="mt-5 mb-4 ">{element.subTitle}</p>
            <p className="mt-5 mb-4">{element.salary}</p>
            <p className="font-medium  mb-4">{element.description}</p>
          </div>
        </div>
            )
          })
          }
      </div>
    </>
  )
}

export default PopularCategories