import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { FaCheck } from 'react-icons/fa6'
import { RxCross2 } from 'react-icons/rx'
import { Context } from '../../main'
import { useLocation, useNavigate } from 'react-router-dom'

const MyJobs = () => {
  const [myJobs, setMyJobs] = useState([]);
  const [editingMode, setEditingMode] = useState(null);
  const { isAuthorized, user } = useContext(Context);
  const{state} = useLocation();

  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const {data} = await axios.get("http://localhost:4000/api/v1/job/getmyjobs", { withCredentials: true });
        setMyJobs(data.myjobs);
      } catch (error) {
        toast.error(error.response.data.message);
        setMyJobs([]);
      }
    }
    fetchJobs();
    if (!isAuthorized || user && user.role !== "Employer") {
      navigateTo("/")
    }
  }, [])


  const handleEnableEdit = (jobId) => {
    setEditingMode(jobId)
  }

  const handleDisableEdit = () => {
    setEditingMode(null)
  }

  const handleUpdateJob = async (jobId) => {
    const updatedJob = myJobs.find(job => job._id === jobId);
    await axios.put(`http://localhost:4000/api/v1/job/update/${jobId}`, updatedJob, {
      withCredentials: true,
    }).then((res) => {
      toast.success(res.data.message);
      setEditingMode(null);
    }).catch((error) => {
      toast.error(error.response.data.message)
    })
  }

  const handleDeleteJob = async (jobId) => {
    await axios.delete(`http://localhost:4000/api/v1/job/delete/${jobId}`, {
      withCredentials: true,
    }).then((res) => {
      toast.success(res.data.message);
      setMyJobs((prevJobs) => prevJobs.filter((job)=> job._id !== jobId));
    }).catch((error) => {toast.error(error.response.data.message)});
  }

  const handleInputChange =  (jobId, field, value) => {
    setMyJobs((prevJobs) => 
      prevJobs.map((job) => 
        job._id === jobId ? { ...job, [field]: value } : job
      )
    );
  };

  return (
    <div>
      <div className="heading text-4xl font-semibold leading-snug text-center mt-4 mb-4">
        <h1 className="text-pink-500">
          Your Posted Jobs
        </h1>
      </div>
      <div>
        {myJobs && myJobs.length > 0 ? (
          <div
            //  className="boxes grid grid-cols-3 gap-8 m-16"
            className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-16'
          >
            {
              myJobs.map(element => {
                return (
                  <div className={`box rounded-lg h-auto p-6 flex flex-col gap-5 bg-blue-100`} key={element._id} >
                    <div>
                      <span>Title:</span>
                      <input className="w-full px-8 py-4 rounded-lg font-normal bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white " type="text" value={element.title} disabled={editingMode !== element._id ? true : false} onChange={(e) => handleInputChange(element._id, "title", e.target.value)} />
                    </div>
                    <div>
                      <span>Country:</span>
                      <input  className="w-full px-8 py-4 rounded-lg font-normal bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white " type="text" value={element.country} disabled={editingMode !== element._id ? true : false} onChange={(e) => handleInputChange(element._id, "country", e.target.value)} />
                    </div>
                    <div>
                      <span>City:</span>
                      <input  className="w-full px-8 py-4 rounded-lg font-normal bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white " type="text" value={element.city} disabled={editingMode !== element._id ? true : false} onChange={(e) => handleInputChange(element._id, "city", e.target.value)} />
                    </div>

                    <div>
                      <span>Category:</span>
                      <select  className="w-full px-8 py-4 rounded-lg font-normal bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white " value={element.category} onChange={(e) => handleInputChange(element._id, "category", e.target.value)} disabled={editingMode !== element._id ? true : false}>
                        <option value="">Category</option>
                        <option value="Mobile App Development">Android Development</option>
                        <option value="Ios Development">Ios Development</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Account & Finance">Account & Finance</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Machine Learning">Machine Learning</option>
                        <option value="Project Management">Project Management</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Content Writing">Content Writing</option>
                        <option value="Customer Support">Customer Support</option>
                        <option value="Sales">Sales</option>
                        <option value="DevOps">DevOps</option>
                        <option value="Cyber Security">Cyber Security</option>
                      </select>
                    </div>

                    <div>
                      <span>
                        Salary:
                        {element.fixedSalary ? (<input  className="w-full px-8 py-4 rounded-lg font-normal bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white " type="number" value={element.fixedSalary} disabled={editingMode !== element._id ? true : false} onChange={(e) => handleInputChange(element._id, "fixedSalary", e.target.value)} />) :
                          <div className='flex gap-1'>
                            <input  className="w-full px-8 py-4 rounded-lg font-normal bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white " type="number" value={element.salaryFrom} disabled={editingMode !== element._id ? true : false} onChange={(e) => handleInputChange(element._id, "salaryFrom", e.target.value)} />

                            <input  className="w-full px-8 py-4 rounded-lg font-normal bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white " type="number" value={element.salaryTo} disabled={editingMode !== element._id ? true : false} onChange={(e) => handleInputChange(element._id, "salaryTo", e.target.value)} />
                          </div>
                        }
                      </span>
                    </div>

                    <div>
                      <span>Expired:</span>
                      <select  className="w-full px-8 py-4 rounded-lg font-normal bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white " value={element.expired} onChange={(e) => handleInputChange(element._id, "expired", e.target.value)} disabled={editingMode !== element._id ? true : false}>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                      </select>
                    </div>

                    <div>
                      <span>Description:</span>
                      <textarea  className="w-full px-8 py-4 rounded-lg font-normal bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white " rows="2" value={element.description} onChange={(e) => handleInputChange(element._id, "description", e.target.value)} disabled={editingMode !== element._id ? true : false} />
                    </div>

                    <div>
                      <span>Location:</span>
                      <textarea  className="w-full px-8 py-4 rounded-lg font-normal bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white " rows="2" value={element.location} onChange={(e) => handleInputChange(element._id, "location", e.target.value)} disabled={editingMode !== element._id ? true : false} />
                    </div>

                    <div>
                      {
                        editingMode === element._id ? (
                          <>
                            <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800  mt-5 tracking-wide font-semibold   w-full py-4 rounded-lg  transition-all duration-300 ease-in-out flex items-center justify-center" onClick={() => { handleUpdateJob(element._id) }}><FaCheck /></button>
                            <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800  mt-5 tracking-wide font-semibold   w-full py-4 rounded-lg  transition-all duration-300 ease-in-out flex items-center justify-center" onClick={() => { handleDisableEdit() }}><RxCross2 /></button>
                          </>
                        ) :
                          (
                            <>
                              <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800  mt-5 tracking-wide font-semibold   w-full py-4 rounded-lg  transition-all duration-300 ease-in-out flex items-center justify-center" onClick={() => { handleEnableEdit(element._id) }}>
                                Edit
                              </button>
                              <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800  mt-5 tracking-wide font-semibold   w-full py-4 rounded-lg  transition-all duration-300 ease-in-out flex items-center justify-center" onClick={() => { handleDeleteJob(element._id) }}>
                                Delete
                              </button>
                            </>
                          )
                      }
                    </div>

                  </div>
                )
              })
            }
          </div>
        ) :
          (<>
            <div className="heading text-4xl font-semibold leading-snug text-center mt-4 mb-4">
              You haven't posted any job yet!
            </div>
          </>)
        }
      </div>
    </div>
  )
}

export default MyJobs