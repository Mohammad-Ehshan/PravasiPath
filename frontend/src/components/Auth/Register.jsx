import React,{useContext, useState} from 'react'
import { Context } from '../../main'
import toast from 'react-hot-toast';
import { Navigate , Link} from 'react-router-dom';
import axios from 'axios';
// import {FaPencilAlt, FaRegUser} from 'react-icons/fa'
// import {MdOutlineMailOutline} from 'react-icons/md'
// import {FaPhoneFlip} from 'react-icons/fa6'
// import {RiLock2Fill} from 'react-icons/ri'


const Register = () => {
  
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [phone, setPhone] = useState("");
const [name, setName] = useState("");
const [role, setRole] = useState("");

const {isAuthorized,setIsAuthorized,user,setUser} = useContext(Context);

const handleRegister = async(e) => {
  e.preventDefault();
  try {
    const {data} = await axios.post(
      "http://localhost:4000/api/v1/user/register",
      {name,email,password,phone,role},
      {
        withCredentials:true,
        headers: {
          "Content-Type" : "application/json"
        }
      }
    );
    toast.success(data.message);
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setRole("");
    setIsAuthorized(true)
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error)
  }
}

  if(isAuthorized){
    return <Navigate to={"/"} />;
  } 

  return (
    <>
    
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className='text-center text-lg'>{/* logo  */} ------CodeWithEhshan------</div>
            <div className=" flex flex-col items-center">
              <h1 className="text-2xl text-blue-600 xl:text-3xl font-bold">Create An Account</h1>
              <div className="w-full flex-1 mt-7">

                <div className="mx-auto max-w-xs">

                <select   className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white " value={role} onChange={(e)=>setRole(e.target.value)} >
                <option value="">Select role</option>
                <option value="Job seeker">Job Seeker</option>
                <option value="Employer">Employer</option>
                </select>

                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 mb-5"
                    type="text" value={name} placeholder='Name' onChange={(e)=>setName(e.target.value)}
                    /> 

                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email" value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)}
                  />

                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text" value={phone} placeholder='Phone Number' onChange={(e)=>setPhone(e.target.value)}
                  />

                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password" value={password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)}
                  />
             
             <button onClick={handleRegister} type='submit' className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800  mt-5 tracking-wide font-semibold   w-full py-4 rounded-lg  transition-all duration-300 ease-in-out flex items-center justify-center">Register</button>

                 <Link to={'/login'}> <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {/* SVG Paths */}
                    </svg>
                    <span className="ml-3 ">Already have an account?</span>
                  </button></Link>

                  <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by Pravasi Path
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Terms of Service
                    </a>
                    and its
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
              }}
            ></div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Register