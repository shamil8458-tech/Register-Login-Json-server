import React, { useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import { Navigate } from 'react-router-dom'

    function Register(){

        const navigate = useNavigate()

        const [form , setForm] = useState({ 
        fullname: "",
        email: "",
        password: "",
        confirmPassword: ""
        })


      const Handlechange = (e) => {

        setForm({...form , [e.target.name] : e.target.value});

      }

      const Handlesubmit = async (e) => {
        e.preventDefault();

        if(!form.fullname || !form.email || !form.password){
            alert("All Fields Required!")
            return
        }

        if(form.password !== form.confirmPassword){
            alert("PassWord not match!")
            return 
        }

        try{
            const res = await axios.get(`http://localhost:3001/users?email=${form.email}`);

            if(res.data.length > 0){
                alert("Email is Already Exists");
                return
            }

            await axios.post("http://localhost:3001/users" ,{
                fullname : form.fullname,
                email : form.email,
                password : form.password,
                 createdAt : new Date()
            });

            navigate("/")

            alert("Registered successfully!")

           
      }catch(err){
        console.log(err)
      }
    }



  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r bg-gray-300'>

      <div>

             <form onSubmit={Handlesubmit} className='flex flex-col bg-white   gap-10 items-center border-1 w-100 h-110 p-10  rounded-2xl'>
            <input name="fullname" placeholder='Full Name' onChange={Handlechange} className='w-90 border-2 h-10 rounded-[10px]'/>
            <input name="email" placeholder='Email'  onChange={Handlechange} className='w-90 border-2 h-10 rounded-[10px]'/>
            <input name="password" placeholder='PassWord'  onChange={Handlechange} className='w-90 border-2 h-10 rounded-[10px]'/>
            <input name="confirmPassword" placeholder='Conform Password' onChange={Handlechange} className='w-90 border-2 h-10 rounded-[10px]'/>
            <button type='submit' className='border-1 h-8 w-30 rounded-[10px] font-bold'>Register</button>
        </form>

        <p>
           Login Now : <Link to="/" className='text-amber-800'>LOGIN</Link>
        </p>
      

      </div>

   
    </div>
  )

}
export default Register
