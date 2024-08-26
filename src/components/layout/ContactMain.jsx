import React from 'react'
import axios from 'axios'

function ContactMain() {
    const [post, setpost] = React.useState({"name":"", "email":"", "subject":"", "content":""})

    const handleInput = (event) => {
        setpost({...post, [event.target.name]: event.target.value})
    }


    function handleSubmit(event){
        event.preventDefault()
        axios.post('https://confident-cow-e38266f6dc.strapiapp.com/api/contact-messages', {data: post})
        .then(response => console.log(response))
        .catch(err => console.log(err))
        alert('Form was submitted successfully');
        event.target.reset();
        return false
    }

  return (
    <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center mt-20 mb-16 px-4 md:px-0'>
            <h2 className='text-2xl md:text-4xl font-semibold'>Get In Touch With Us</h2>
            <p className='text-sm md:text-base mt-3 text-center text-address-txt'>For More Information About Our Product & Services. 
                Please Feel Free To Drop Us<br/> An Email. Our Staff Always Be There 
                To Help You Out. Do Not Hesitate!
            </p>
        </div>
        <div className='p-10 grid grid-cols-1 gap-12 lg:gap-0 lg:grid-cols-2'>
            <div className='flex flex-col gap-6'>
                <div className='grid grid-cols-2-contact-main gap-6'>
                    <img className="w-23px h-23px" src="../assets/location.svg" alt="" />
                    <div>
                        <h3 className='-mt-1 font-medium text-xl md:text-2xl'>Address</h3>
                        <p className='text-sm md:text-base'>236 5th SE Avenue, New York NY10000, United States</p>
                    </div>
                </div>
                <div className='grid grid-cols-2-contact-main gap-6'>
                    <img className="w-23px h-23px" src="../assets/phone.svg" alt="" />
                    <div>
                        <h3 className='-mt-1 font-medium text-xl md:text-2xl'>Phone</h3>
                        <p className='text-sm md:text-base'>Mobile: +(84) 546-6789<br/>Hotline: +(84) 456-6789</p>
                    </div>
                </div>
                <div className='grid grid-cols-2-contact-main gap-6'>
                    <img className="w-23px h-23px" src="../assets/clock.svg" alt="" />
                    <div>
                        <h3 className='-mt-1 font-medium text-xl md:text-2xl'>Working Time</h3>
                        <p className='text-sm md:text-base'>Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00</p>
                    </div>
                </div>
            </div>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <span>Your name</span>
                <div className='border border-black rounded-lg mb-4 w-80 h-14 md:w-450px xl:w-528px md:h-75px p-4 flex items-center'>
                    <input name="name" onChange={handleInput} className="w-full h-full" placeholder="Abc" type="text" required/>
                </div>
                <span>Email address</span>
                <div className='border border-black rounded-lg mb-4 w-80 h-14 md:w-450px xl:w-528px md:h-75px p-4 flex items-center'>
                    <input name="email" onChange={handleInput} className="w-full h-full" placeholder="Abc@def.com" type="email" required/>
                </div>
                <span>Subject</span>
                <div className='border border-black rounded-lg mb-4 w-80 h-14 md:w-450px xl:w-528px md:h-75px p-4 flex items-center'>
                    <input name="subject" onChange={handleInput} className="w-full h-full" placeholder="This is an optional" type="text" />
                </div>
                <span>Message</span>
                <div className='border border-black rounded-lg mb-4 w-80  md:w-450px xl:w-528px h-120px p-4 items-start'>
                    <input name="content" onChange={handleInput} className="w-full h-auto truncate" placeholder="Hi! i’d like to ask about" type="text" required/>
                </div>
                <button className='bg-brownish-creamy rounded w-44 md:w-237px h-55px text-white' type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMain
