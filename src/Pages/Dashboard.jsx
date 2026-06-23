import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
// import { AuthContext } from '../Context/AuthContext';

// function Dashboard() {
//     const {user , logout} = useContext(Authcontext)
//     console.log(user)
//   return (
//     <div>

//         <h3>Welcome {user?.fullname}</h3>

//         <h1>Muhammed shamil</h1>

//         <button onClick={logout}>Logout</button>
      
//     </div>
//   )
// }

// export default Dashboard



function Dashboard() {
 


  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return <h2>Loading...</h2>
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-300'>
      <div className='flex flex-col gap-4'>
         <h1 className='font-bold text-amber-800 text-3xl'>Welcome {user.fullname}</h1>
      <button onClick={logout} className='border-1 h-8 w-30 rounded-[10px] font-bold'>Logout</button>

      </div>
     
    </div>
  )
}
export default Dashboard