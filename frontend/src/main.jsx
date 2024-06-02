import React, { createContext,useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fontsource/roboto'; 
import '@fontsource/roboto/500.css'; 
// import '@fontsource/roboto/600.css';
// // import '@fontsource/roboto/600.css'; // For Roboto Semi-Bold
import '@fontsource/roboto/700.css'; 
import '@fontsource/roboto/900.css'; 


export const Context = createContext({ isAuthorized:false })

const AppWrapper = () =>{
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState({})

  return(
    <Context.Provider value={{isAuthorized, setIsAuthorized,user, setUser}}>
       <App />
    </Context.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
)
