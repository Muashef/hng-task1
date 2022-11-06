import React from 'react'
import zuri from "../images/zuri-internship.png"
import I4G from "../images/I4G.png"


const Contact = () => {

  const name = "MOH";
  return (
    <div>
      <main className="flex flex-col w-full max-w-3xl px-5 mt-1 py-6 mx-auto text-gray-900 font-inter gap-y-5">
        <h1 className='text-4xl font-semibold text-[#101828] font-inter-500'>Contact Me</h1>
        <p className='text-lg font-inter-400 text-[#475467] mb-5'>Hi there, contact me to ask me about anything you have in mind.</p>
        <form action=''>
          <div className='flex flex-col gap-7 sm:flex-row mx-auto gap-y-6'>
            <div className=''>
              <label htmlFor="first_name" className='block mb-2 text-sm font-medium text-gray-700'>First Name</label> 
              <input type="text" id='first_name' placeholder='Enter your first name' className='w-full sm:w-[350px] border border-[#D0D5DD] focus:outline-none py-2 px-2 rounded-lg' />
            </div>
            <div className=''>
            <label htmlFor="last_name" className='block mb-2 text-sm font-medium text-gray-700'>Last Name</label>
            <input type="text" id='last_name' placeholder='Enter your last name' className='w-full sm:w-[350px] border border-[#D0D5DD] focus:outline-none py-2 px-2 rounded-lg'/>
            </div>
          </div>
          <div className='mt-8'>
            <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-700'>Email</label>
            <input type="email" id='email' placeholder='yourname@gmail.com'className='w-full border border-[#D0D5DD] focus:outline-none py-2 px-2 rounded-lg' />
          </div>
          <div className='mt-8'>
            <label htmlFor="message" className='mb-3 text-sm font-medium text-gray-700'>Message</label>
            <textarea name="message" id="message" cols="10" rows="10" placeholder='Send me a message and i will reply you as soon as possible...' className='w-full border border-[#D0D5DD] focus:outline-none py-2 px-2 rounded-lg h-36'></textarea>
          </div>
          <div className='mt-8'>
            <input type="checkbox" className='mx-3' />
            <span className='text-sm font-medium text-gray-500'>You agree to providing your data to {name} who may contact you.</span>
          </div>
          <div className='mt-8'>
          <button id='btn__submit' className='w-full text-center bg-[#1570EF] rounded-lg py-3 text-white text-lg hover:bg-gray'>Send message</button>
          </div>
          
        </form>
      </main>
      <section id='footer' className='flex flex-col items-start sm:flex-row sm:justify-around sm:items-center text-center px-5 text-sm text-gray-500 gap-y-4 mt-4'>
          <img src={zuri} alt="zuri"/>
          <p>HNG Internship 9 Frontend Task</p>
          <img src={I4G} alt="I4G"/>
        </section>
    </div>
  )
}

export default Contact