import { useState } from 'react'
import {useForm} from 'react-hook-form'
import './App.css'

function App() {
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
const onSubmit = (data) => console.log(data)
  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center p-4 bg-blue-50">
   
      <form 
        className="border-blue-800 border-2 w-full max-w-md p-6 flex flex-col items-center rounded-md bg-white shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl text-blue-800 font-medium mb-4 text-center">Form</h1>

        <div className="w-full mb-4">
          <label className="text-blue-950 text-[16px] font-medium block mb-1">Name:</label>
          <input 
            type="text" 
            className="border-blue-600 border-2 w-full p-2 rounded text-blue-950 font-medium" 
           {...register("name", { required: true, minLength:4,maxLength:6 })}
          />
          {errors.name?. type==="required" && <p className="text-red-600 mt-1 text-sm">This is required Field</p>}
          {errors.name?. type==="minLength" && <p className="text-red-600 mt-1 text-sm">Write Atleast 4 digits</p>}
          {errors.name?. type==="maxLength" && <p className="text-red-600 mt-1 text-sm">You can write only 6 digits</p>}
        </div>

   
        <div className="w-full mb-4">
          <label className="text-blue-950 text-[16px] font-medium block mb-1">Password:</label>
          <input 
            type="password" 
            className="border-blue-600 border-2 w-full p-2 rounded text-blue-950 font-medium" 
            {...register("password", { required: true, minLength:4,maxLength:6 })}
          />
           {errors.password?. type==="required" && <p className="text-red-600 mt-1 text-sm">This is required Field</p>}
          {errors.password?. type==="minLength" && <p className="text-red-600 mt-1 text-sm">Write Atleast 4 Numbers</p>}
          {errors.password?. type==="maxLength" && <p className="text-red-600 mt-1 text-sm">You can write only 6 Numbers</p>}
         
        </div>

        <button 
          type="submit" 
          className="border-blue-600 border-2 bg-blue-200 w-full p-2 rounded-md text-blue-950 text-[16px] font-medium hover:bg-blue-400 transition duration-300"
         
        >
          Submit
        </button>
      </form>
    </div>
    </>
  )
}

export default App
