// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Navigate } from 'react-router-dom';

// function ProtectedRoute({children}) {

//     const user = localStorage.getItem("user");

//     if(!user){
//         return <Navigate to="/"/>
//     }
//   return children;
// }

// export default ProtectedRoute




import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

function ProtectedRoute({ children }) {

  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/" />
  }

  return children;
}

export default ProtectedRoute;