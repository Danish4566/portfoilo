import React from 'react'

const page = () => {
    return (
        <>
            <div className='min-h-screen'>
                <h1 className="mt-8 md:mt-0 text-4xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400  text-center mb-4">
                    My <span className='text-blue-700 '>Skills</span>
                </h1>
                <div className='flex justify-evenly mt-10 md:flex-row flex-col '>
                    <div className='text-center'>
                        <div className="radial-progress mb-5 md:mb-3" style={{ "--value": 90 }} role="progressbar">90%</div>
                        <h2 className='font-bold text-2xl  mb-5 md:mb-3'>HTML</h2>
                    </div>
                    <div className='text-center '>
                        <div className="radial-progress  mb-5 md:mb-3" style={{ "--value": 90 }} role="progressbar">90%</div>
                        <h2 className='font-bold text-2xl  mb-5 md:mb-3'>CSS</h2>
                    </div>
                    <div className='text-center '>
                        <div className="radial-progress  mb-5 md:mb-3" style={{ "--value": 70 }} role="progressbar">70%</div>
                        <h2 className='font-bold text-2xl  mb-5 md:mb-3'>Javascript</h2>
                    </div>
                    <div className='text-center '>
                        <div className="radial-progress  mb-5 md:mb-3" style={{ "--value": 50 }} role="progressbar">50%</div>
                        <h2 className='font-bold text-2xl  mb-5 md:mb-3'>React JS</h2>
                    </div>
                    <div className='text-center '>
                        <div className="radial-progress  mb-5 md:mb-3" style={{ "--value": 50 }} role="progressbar">50%</div>
                        <h2 className='font-bold text-2xl  mb-5 md:mb-3'>Next JS</h2>
                    </div>

                </div>
            <div className='mt-10'> 
            <h1 className="mt-8 md:mt-0 text-4xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400  text-center mb-4">
                    Frameworks
                </h1>
                <div className='flex justify-evenly mt-10 md:flex-row flex-col '>
                    <div className='text-center'>
                        <div className="radial-progress mb-5 md:mb-3" style={{ "--value": 90 }} role="progressbar">90%</div>
                        <h2 className='font-bold text-2xl  mb-5 md:mb-3'>Bootstrap</h2>
                    </div>
                    <div className='text-center '>
                        <div className="radial-progress  mb-5 md:mb-3" style={{ "--value": 90 }} role="progressbar">90%</div>
                        <h2 className='font-bold text-2xl  mb-5 md:mb-3'>Tailwind Css</h2>
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default page
