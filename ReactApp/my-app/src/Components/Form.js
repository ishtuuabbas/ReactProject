import React from 'react'
import { Button } from '@mui/material';
// import bgimg from '../assect/image'
import{useForm} from "react-hook-form";
export default function Form(){
    const{register,handleSubmit,watch,formState:{errors}}=useForm()
    const onSubmit=data=>console.log(data);

    console.log(watch("username"))
    return(
        <section>
            <div className='register'>
                <div className='col-1'>
                    <h2>Sign in</h2>
                   < span>register and get the services</span>
               <form id='form'className='flex flex-col' onSubmit={handleSubmit()}>
                <input type='text'{...register("username")}placeholder='Username'/>
                <input type='text'{...register("password")}placeholder='Password'/>
                <input type='text'{...register("conformpassword")}placeholder='Confirm Password'/>
                <input type='text'{...register("mobile",{required:true, maxLenght:10})}placeholder='Mobile Number'/>
                {errors.mobile?.type==="required"&& "Mobile Number is required"}
                {errors.mobile?.type==="maxLenght"&& "Max  Length Exceed"}
                
            <button className='btn'>Sign In</button>
               </form>
                </div>
                <div className='col-2'>
                {/* <img src={bgImg}alt=""/> */}
                </div>
                </div>
                </section>
    )
}