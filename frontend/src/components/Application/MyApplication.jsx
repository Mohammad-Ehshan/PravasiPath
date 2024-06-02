import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../main'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import ResumeModal from './ResumeModal'

const MyApplication = () => {
  const [applications, setApplications] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [resumeImageUrl, setResumeImageUrl] = useState("");
  const { isAuthorized, user } = useContext(Context);

  const navigateTo = useNavigate();

  useEffect(() => {
    try {
      if (user && user.role === "Employer") {
        axios.get("http://localhost:4000/api/v1/application/employer/getall", { withCredentials: true }).then((res) => {
          setApplications(res.data.applications)
        })
      }
      else {
        axios.get("http://localhost:4000/api/v1/application/jobseeker/getall", { withCredentials: true }).then((res) => {
          setApplications(res.data.applications)
        })
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }

  }, [isAuthorized])

  if (!isAuthorized) {
    navigateTo("/login");
  }

  const deleteApplication = (id) => {
    try {
      axios
        .delete(`http://localhost:4000/api/v1/application/delete/${id}`, { withCredentials: true })
        .then((res) => {
          toast.success(res.data.message);
          setApplications((prevApplication) => 
            prevApplication.filter((application) => application._id !== id)
          );
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const openModal = (imageUrl) => {
    setResumeImageUrl(imageUrl),
      setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }


  return (
    <section >
      {
        user && user.role === "Job seeker" ? (
          <div>
            <h1 className='text-center font-medium text-4xl text-pink-500 mt-5'>My Applications</h1>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-16'>

              {applications.length <= 0 ? (
                <>
                  {" "}
                  <h4>No Applications Found</h4>{" "}
                </>
              ) : (applications.map((element) => {
                return (<JobSeekerCard element={element} key={element._id} deleteApplication={deleteApplication} openModal={openModal} />);
              })
              )}
            </div>
          </div>
        ) : (
          <div>
            <h1 className='text-4xl px-6 py-4 text-pink-500 font-medium'>Applications</h1>
            {
              applications.map((element) => {
                return <EmployerCard element={element} key={element._id} openModal={openModal} />
              })
            }
          </div>
        )
      }
      {
        modalOpen && (
          <ResumeModal imageUrl={resumeImageUrl} onClose={(closeModal)} />
        )
      }

    </section>
  )
}

export default MyApplication

const JobSeekerCard = ({ element, deleteApplication, openModal }) => {
  return (
    <>
      <div className={`box rounded-lg h-auto transform bg-purple-100`} >
        <div className="upper h-1/2 mx-10">
          <h1 className="py-4 heading text-4xl font-semibold leading-snug">
            {element.name}
          </h1>
          <p className="mt-5 mb-4">Email: {element.email}</p>
          <p className="font-medium pb-4">Cover Letter: {element.coverLetter}</p>
          <div>
            <img className='cursor-pointer' src={element.resume.url} alt="resume" onClick={() => openModal(element.resume.url)} />
          </div>
          <button onClick={() => deleteApplication(element._id)} type="button" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-5 mt-5">Delete Application</button>
        </div>
      </div>
    </>
  )
}

const EmployerCard = ({ element, openModal }) => {
  return (
    <>
      <div className={`box rounded-lg h-auto transform bg-purple-100 m-5`} >
        <div className="upper h-1/2 mx-10">
          <h1 className="py-4 heading text-4xl font-semibold leading-snug">
            {element.name}
          </h1>
          <p className="mt-5 mb-4">Email: {element.email}</p>
          <p className="font-medium pb-4">Cover Letter: {element.coverLetter}</p>
          <div>
            <img className='cursor-pointer' src={element.resume.url} alt="resume" onClick={() => openModal(element.resume.url)} />
          </div>
        </div>
      </div>
    </>
  )
}



