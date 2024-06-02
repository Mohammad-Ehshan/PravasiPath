import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../main'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();
  const colors = ["bg-purple-50", "bg-lime-50", "bg-orange-50", "bg-emerald-50", "bg-pink-50", "bg-blue-50"];

  useEffect(() => {
    try {
      axios.get("http://localhost:4000/api/v1/job/getall", { withCredentials: true, }).then((res) => {
        setJobs(res.data);
      });
    } catch (error) {
      console.log(error)
    }
  }, [])
  if (!isAuthorized) {
    navigateTo("/login")
  }

  return (
    <>
      <div>
        <div className="heading text-4xl font-semibold leading-snug text-center mt-4 mb-4">
          <h1 className="text-pink-500">
            Find Your Match
          </h1>
          <h1>Job Here</h1>
        </div>
        <div
          //  className="boxes grid grid-cols-3 gap-8 m-16"
          className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-16'
        >

          {jobs.jobs &&
            jobs.jobs.map((element, index) => {
              const colorClass = colors[index % colors.length];

              return (<>
                <Link to={`/job/${element._id}`}  state={{colorClass}}>
                  <div className={`box rounded-lg h-full transform hover:scale-105 transition duration-200 ease-in-out ${colorClass}`} key={element._id} >
                    <div className="upper h-auto ml-10">
                      <h1 className="py-4 heading text-4xl font-semibold leading-snug">
                        {element.title}
                      </h1>
                      <p className="mt-5 mb-4">{element.category}</p>
                      <p className="font-medium pb-4">{element.country}</p>
                    </div>
                  </div>
                </Link>
              </>)
            })
          }
        </div>
      </div>
    </>
  )
}

export default Jobs