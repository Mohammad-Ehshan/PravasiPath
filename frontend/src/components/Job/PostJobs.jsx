import React, { useContext, useState } from 'react'
import { Context } from '../../main';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const PostJobs = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [fixedSalary, setFixedSalary] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [salaryType, setSalaryType] = useState("default");

  const { isAuthorized, user } = useContext(Context);

  const navigateTo = useNavigate();

  const handleJobPost = async (e) => {
    e.preventDefault();
    if (salaryType === "Fixed Salary") {
      setSalaryFrom("");
      setSalaryTo("");
    } else if (salaryType === "Ranged Salary") {
      setFixedSalary("");
    } else {
      setSalaryFrom("");
      setSalaryTo("");
      setFixedSalary("");
    }
    await axios.post("http://localhost:4000/api/v1/job/post",
      fixedSalary.length >= 4
        ? {title, category, country, city, location, fixedSalary, description}
        : {title, category, country, city, location, salaryFrom, salaryTo,description},
      {
        withCredentials: true, headers:
        {
          "Content-type": "application/json"
        }
      }).then((res) => toast.success(res.data.message))
      .catch((error) => {
        toast.error(error.response.data.message)
      })
  };

  if (!isAuthorized || (user && user.role !== "Employer")) {
    navigateTo("/login")
  }

  return (
    // <div className="relative min-h-screen  ">
    // <div className="absolute inset-0 bg-cover bg-center bg-no-repeat  z-0" style={{ backgroundImage: "url('/jobApplication.jpg')" }} >
    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 m-auto z-10  bg-transparent ">
      <div className='text-center text-lg'>{/* logo  */} ------CodeWithEhshan------</div>
      <div className=" flex flex-col items-center">
        <h1 className="text-2xl text-blue-500 xl:text-3xl font-bold">Post A Job</h1>
        <div className="w-full flex-1 mt-7">

          <div className="mx-auto max-w-xs flex flex-col gap-5">

            <input
              className="w-full px-8 py-4 rounded-lg font-normal bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
              type="text" value={title} placeholder='Title' onChange={(e) => setTitle(e.target.value)}
            />

            <select className="w-full px-8 py-4 rounded-lg font-normal bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white " value={category} onChange={(e) => setCategory(e.target.value)} >
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


            <input
              className="w-full px-8 py-4 rounded-lg font-normal bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              type="text" value={country} placeholder='Country' onChange={(e) => setCountry(e.target.value)}
            />

            <input
              className="w-full px-8 py-4 rounded-lg font-normal bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
              type="text" value={city} placeholder='City' onChange={(e) => setCity(e.target.value)}
            />

            <input
              className="w-full px-8 py-4 rounded-lg font-normal bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
              type="text" value={location} placeholder='Location' onChange={(e) => setLocation(e.target.value)}
            />

            <select className="w-full px-8 py-4 rounded-lg font-normal bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white " value={salaryType} onChange={(e) => setSalaryType(e.target.value)} >
              <option value="default">default</option>
              <option value="Fixed Salary">Fixed Salary</option>
              <option value="Ranged Salary">Ranged Salary</option>
            </select>

            { salaryType === "Fixed Salary" ? (
              <input
                className="w-full px-8 py-4 rounded-lg font-normal bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                type="text" value={fixedSalary} placeholder='Enter Salary' onChange={(e) => setFixedSalary(e.target.value)}
              />
            ) : (
              <>
                <input
                  className="w-full px-8 py-4 rounded-lg font-normal bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                  type="text" value={salaryFrom} placeholder='Salary From' onChange={(e) => setSalaryFrom(e.target.value)}
                />

                <input
                  className="w-full px-8 py-4 rounded-lg font-normal bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                  type="text" value={salaryTo} placeholder='Salary To' onChange={(e) => setSalaryTo(e.target.value)}
                />
              </>
            )
          }

          <textarea
            className="w-full px-8 py-4 rounded-lg font-normal bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
            rows="2" value={description} placeholder='Description' onChange={(e) => setDescription(e.target.value)}
          />

           <Link to={'/job/getall'}> <button onClick={handleJobPost} type='submit' className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800  mt-5 tracking-wide font-semibold   w-full py-4 rounded-lg  transition-all duration-300 ease-in-out flex items-center justify-center">Submit</button> </Link>

          </div>
        </div>
      </div>
    </div>
    // </div>
    // </div>
  )
}

export default PostJobs