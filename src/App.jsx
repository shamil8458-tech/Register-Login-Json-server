import React from 'react'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import AuthProvider from './Context/AuthContext'
// import Dashboard from './Pages/Dashboard'
import Dashboard from './Pages/Dashboard'
import ProtectedRoute from './Components/ProtectedRoute'

function App() {
  return (

    <AuthProvider>

       <BrowserRouter>
        {/* <Routes>
            <Route path="/" element={<Login/>}/>
            {/* <Route path="/" element={<Register/>}/> */}
             {/* <Route path="/register" element={<Register/>}/> */}
          {/* </Routes> */} 

          <Routes>
     <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

         <Route
            path="/dashboard"
            element={
           <ProtectedRoute>
            <Dashboard />
            </ProtectedRoute>
           }
           />
         </Routes>
    
        </BrowserRouter>

    </AuthProvider>

 

    
    // </BrowserRoute>
  
  )
}

export default App
