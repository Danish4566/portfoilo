import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <>
            <h1 className="mt-8 md:mt-0 text-4xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400  text-center mb-4">
                My <span className='text-blue-700 '>Journey</span>
            </h1>

            <div className='flex flex-col items-center min-h-screen'>
                <div className="card bg-base-100 image-full w-96 shadow-xl mb-2">
                    <figure>
                        <Image
                            src="/images/code2.jpg"
                            alt="My Image"
                            width={400}
                            height={400}
                            className=""
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">2023 - 2024</h2>
                        <h5>Mern Stack Course - Digifolks</h5>
                        <p> HTML, CSS, JavaScript</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-blue-700 border-0">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 image-full w-96 shadow-xl mb-2">
                    <figure>
                        <Image
                            src="/images/fsc.jpg"
                            alt="My Image"
                            width={400}
                            height={400}
                            className=""
                        />
                    </figure>
                    <div className="card-body">
                    <h2 className="card-title">2022 - 2020</h2>
                        <h5>Intermediate - Degree College</h5>
                        <p>Pre Engineering </p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-blue-700 border-0">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 image-full w-96 shadow-xl mb-2">
                    <figure>
                        <Image
                            src="/images/bio.jpeg"
                            alt="My Image"
                            width={400}
                            height={400}
                            className=""
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">2018 - 2020</h2>
                        <h5>Matric - National School</h5>
                        <p> Matric in (BIO)</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-blue-700 border-0">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default page
