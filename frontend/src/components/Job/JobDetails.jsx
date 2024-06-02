import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams,useLocation } from 'react-router-dom'
import { Context } from '../../main';
import axios from 'axios';

const JobDetails = () => {
  const {id} = useParams();
  const [job, setJob] = useState({});
  const navigateTo = useNavigate();
  const {isAuthorized,user}=useContext(Context);
  const {state} = useLocation()

  useEffect(() => {
   axios.get(`http://localhost:4000/api/v1/job/${id}`,{
    withCredentials:true
   }).then((res)=>{
    setJob(res.data.job);
   }).catch((err)=>{
    console.log(err.respone.data.json);
   })
  }, [])

  if(!isAuthorized){
    navigateTo("/login");
  }
  

  return (
    <> 
    <div >
     <div className="heading text-4xl font-semibold leading-snug text-center mt-4 mb-8">
    <h1 className="text-pink-500">
      Find Your Match
    </h1>
    <h1>Job Here</h1>
  </div>
  <div className="flex  justify-center  ">
  <div className={`desc p-6 w-auto h-auto rounded-lg ${state?.colorClass || 'bg-blue-50'}`}>
   <h1 className='heading text-4xl font-semibold leading-snug py-2'>{job.title}</h1>
   <p className='font-medium '>Category : <span className='font-normal'>{job.category}</span></p>
   <p className='font-medium '>Country : <span className='font-normal'>{job.country}</span></p>
   <p className='font-medium '>City : <span className='font-normal'>{job.city}</span></p>
   <p className='font-medium '>Location : <span className='font-normal'>{job.location}</span></p>
   <p className='font-medium '>Description : <span className='font-normal'>{job.description}</span></p>
   <p className='font-medium '>Job Posted On : <span className='font-normal'>{job.jobPostedOn}</span></p>
   <p className='font-medium '>Salary : {job.fixedSalary ? (<span className='font-normal'>{job.fixedSalary}</span>) : (<span className='font-normal'>{job.salaryFrom} - {job.salaryTo}</span>) }</p>
   <p className='py-4'>{user && user.role === "Employer" ? <></> : <Link to={`/application/${job._id}`}><button type="button" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Apply Now</button></Link>}</p>
  </div>
  </div>
  </div>
  </>
  )
}

export default JobDetails