import React, { useContext, useEffect, useState } from 'react'
import {Context  } from "../../main"
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const Application = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState(null);

  const {isAuthorized,user} = useContext(Context);

  const navigateTo = useNavigate();
  
  const handleFileChange = (e) => {
    const resume = e.target.files[0];
    setResume(resume);
  }

  const { id } = useParams(); 

  const handleApplication = async(e) => {
    e.preventDefault();
    const formData =  new FormData();
    formData.append("name",name);
    formData.append("email",email);
    formData.append("coverLetter",coverLetter);
    formData.append("resume",resume);
    formData.append("jobId",id);

    try {
      const {data} = await axios.post("http://localhost:4000/api/v1/application/post",formData,{
        withCredentials:true,
        header:{
          "Content-Type":"multipart/form-data"
        }
      });
      setName("");
      setEmail("");
      setCoverLetter("");
      setResume(""); 
      toast.success(data.message);
      navigateTo("/job/getall")
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    if(!isAuthorized || (user && user.role === "Employer")){
      navigateTo("/");
    }
  }, [])
  
  useEffect(() => {
    console.log("Job id",id)
  }, [id])

  
  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Application Form</h1>
              <div className="w-full flex-1 mt-8 ">
                <div className="mx-auto max-w-xs">
                  <form className='flex gap-5 flex-col' onSubmit={handleApplication}>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                  <textarea className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    placeholder="Cover Letter"
                    value={coverLetter}
                    onChange={(e)=>setCoverLetter(e.target.value)}
                    rows={5}
                    />

                    <div>
                      <label className='font-medium'>Select resume</label>
                      <input className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    placeholder="Cover Letter" type="file" accept='.jpg,.png,.webp' onChange={handleFileChange}/>
                    </div>

                  <button type='submit' className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" >
                    <span className="ml-3 ">Submit</span>
                  </button>
                  </form>
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
  );
}

export default Application