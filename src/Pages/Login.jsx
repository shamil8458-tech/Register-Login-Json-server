import React, { useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()

    const {login} = useContext(AuthContext)

    const [form ,setForm] = useState({
       email :"",
       password:""

    })

    const handleChange =(e) => {
         setForm({...form , [e.target.name] : e.target.value });

    }

  const handleLogin = async (e) => {
      e.preventDefault()

     try{
        let res = await axios.get(
            `http://localhost:3001/users?email=${form.email}&password=${form.password}`
        );

        if(res.data.length === 0){
            alert("details is not Correct!")
            return
        }

        // localStorage.setItem("user" ,JSON.stringify(res.data[0]));

        login(res.data[0])

        navigate("/dashboard")

        alert("Login success")
     }catch(err){
        console.log(err);
     }

  }
  return (
    <div className='min-h-screen flex items-center justify-center  bg-gray-300  '>

        <div className=''>

            
        <form onSubmit={handleLogin} className='flex flex-col bg-white  gap-10 items-center w-100 h-70 p-11 rounded-2xl shadow-md'>
            <input name='email' placeholder='Email'  onChange={handleChange} className='w-90 bg-gray-300  h-10 rounded-[10px] p-4 shadow-md'/>
            <input name='password' placeholder='PassWord' onChange={handleChange}className='w-90 bg-gray-300  h-10 rounded-[10px] p-4 shadow-md' />
            <button type='submit' className='bg-gray-500 shadow-md h-8 w-30 rounded-[10px] font-bold'>Login</button>
        </form>

        <p className='text-gray-600/70 mt-1 ml-4'>
            Regester Now : <Link to="/register" className='text-black font-medium '>REGISTER</Link>
        </p>

        </div>

      
    </div>
  )
}

export default Login
