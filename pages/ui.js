import React from 'react'

const ui = () => {
    return (
        <div className='bg-black text-gray-300 text-lg'>
            <div className='flex justify-between items-center p-8'>
                <p className='text-2xl font-bold'>Anish</p>
                <p>Work</p>
            </div>

            <div className='mt-16 flex flex-col justify-center items-center space-y-4'>
                <p className='text-md font-medium text-red-500'>Hello!</p>
                <p className='text-3xl'>I&apos;m Anish Jain</p>
                <p>Blockend Developer</p>
                <div className='flex space-x-2'>
                    <button className='rounded-2xl bg-red-700 p-4'>HIRE Me</button>
                    <button className='rounded-2xl bg-red-700 p-4'>MY WORKS</button>
                </div>
                <div className='flex space-x-2'>
                    <p>Twitter</p>
                    <p>Github</p>
                    <p>Youtube</p>
                </div>
            </div>

            {/* ABOUT */}

            <div className='flex flex-col justify-center items-center mt-16 space-y-4 max-w-lg mx-auto'>
                <p className='text-4xl text-red-500'>About Me</p>
                <p className='text-center'>
                    I&apos;m a passionate software engineer specialized in building full stack websites and web applications for individuals and small businesses!
                </p>
            </div>

            {/* The Process */}
            <div className='flex flex-col space-y-4 mt-16 items-center'>
                <p className='text-4xl text-red-500'>The Process</p>
                <p className='text-center'>It is important for all my clients to know how I can build you a successful web site.</p>

                {/* Card */}

                {/* <div className='flex flex-col md:flex-row space-y-4 md:space-x-4 p-4 max-w-4xl mx-auto '> */}
                <div className='max-w-4xl mx-auto grid grid-row-1 gap-8 p-2 md:grid-cols-3 md:gap-4'>
                    <div className='bg-white text-black 
                    rounded-md'>
                        <img src="/tribes.png" />
                        <div className='p-4 space-y-2 h-full w-full'>

                            <p className='font-medium text-gray-500'>Web3-Tribes is a project utilizing the tribes module from Decentology&apos;s hyperverse. The aim of this project is to allow users to join different communities and gain access to content only visible to those in that specific tribe.</p>
                            <hr />
                            <div className='flex justify-between'>
                                <a className='px-4 py-2 text-sm cursor-pointer duration-100 border-2 border-red-500 rounded-md bg-red-700 text-white'>
                                    Live
                                </a>

                                <a className='px-4 py-2 text-sm cursor-pointer duration-100 border-2 border-red-500 rounded-md bg-red-700 text-white'>
                                    Github
                                </a>

                                <a className='px-4 py-2 text-sm cursor-pointer duration-100 border-2 border-red-500 rounded-md bg-red-700 text-white'>
                                    Youtube
                                </a>

                            </div>
                        </div>
                    </div>
                    {/* <div className='bg-white text-black rounded-md p-4 space-y-2 '>
                        <p>Icon</p>
                        <p>PROPOSAL</p>
                        <hr />
                        <p>We begin with talking about what project you want to create.</p>
                    </div> */}

                    <div className='bg-white text-black 
                    rounded-md'>
                        <img src="/tribes.png" />
                        <div className='p-4 space-y-2 h-full w-full'>

                            <p className='font-medium text-gray-500'>Web3-Tribes is a project utilizing the tribes module from Decentology&apos;s hyperverse. The aim of this project is to allow users to join different communities and gain access to content only visible to those in that specific tribe.</p>
                            <hr />
                            <div className='flex justify-between'>
                                <a className='px-4 py-2 text-sm cursor-pointer duration-100 border-2 border-red-500 rounded-md bg-red-700 text-white'>
                                    Live
                                </a>

                                <a className='px-4 py-2 text-sm cursor-pointer duration-100 border-2 border-red-500 rounded-md bg-red-700 text-white'>
                                    Github
                                </a>

                                <a className='px-4 py-2 text-sm cursor-pointer duration-100 border-2 border-red-500 rounded-md bg-red-700 text-white'>
                                    Youtube
                                </a>

                            </div>
                        </div>
                    </div>



                    {/* <div className='bg-white text-black rounded-md p-4 space-y-2 '>
                        <p>Icon</p>
                        <p>DEVELOPMENT</p>
                        <hr />
                        <p>We begin with talking about what project you want to create.</p>
                    </div> */}

                    <div className='bg-white text-black 
                    rounded-md'>
                        <img src="/tribes.png" />
                        <div className='p-4 space-y-2 h-full w-full'>

                            <p className='font-medium text-gray-500'>Web3-Tribes is a project utilizing the tribes module from Decentology&apos;s hyperverse. The aim of this project is to allow users to join different communities and gain access to content only visible to those in that specific tribe.</p>
                            <hr />
                            <div className='flex justify-between'>
                                <a className='px-4 py-2 text-sm cursor-pointer duration-100 border-2 border-red-500 rounded-md bg-red-700 text-white'>
                                    Live
                                </a>

                                <a className='px-4 py-2 text-sm cursor-pointer duration-100 border-2 border-red-500 rounded-md bg-red-700 text-white'>
                                    Github
                                </a>

                                <a className='px-4 py-2 text-sm cursor-pointer duration-100 border-2 border-red-500 rounded-md bg-red-700 text-white'>
                                    Youtube
                                </a>

                            </div>
                        </div>
                    </div>
                    {/* <div className='bg-white text-black rounded-md p-4 space-y-2 '>
                        <p>Icon</p>
                        <p>LAUNCH</p>
                        <hr />
                        <p>We begin with talking about what project you want to create.</p>
                    </div> */}

                    <div className='bg-white text-black 
                    rounded-md'>
                        <img src="/tribes.png" />
                        <div className='p-4 space-y-2 h-full w-full'>

                            <p className='font-medium text-gray-500'>Web3-Tribes is a project utilizing the tribes module from Decentology&apos;s hyperverse. The aim of this project is to allow users to join different communities and gain access to content only visible to those in that specific tribe.</p>
                            <hr />
                            <div className='flex justify-between'>
                                <a className='px-4 py-2 text-sm cursor-pointer duration-100 border-2 border-red-500 rounded-md bg-red-700 text-white'>
                                    Live
                                </a>

                                <a className='px-4 py-2 text-sm cursor-pointer duration-100 border-2 border-red-500 rounded-md bg-red-700 text-white'>
                                    Github
                                </a>

                                <a className='px-4 py-2 text-sm cursor-pointer duration-100 border-2 border-red-500 rounded-md bg-red-700 text-white'>
                                    Youtube
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills */}
            <div className='mt-16 flex flex-col items-center space-y-4'>
                <p className='text-4xl text-red-500'>Skills</p>
                <p>SOLIDITY</p>
                <p>NEXTJS</p>
                <p>HTML</p>
                <p>JS</p>
            </div>

            {/* Contact */}
            <form className='bg-white max-w-lg mx-auto p-8 rounded-md space-y-4 flex flex-col mt-16'>
                <input className='border-2 p-2 border-black block text-black rounded-sm' type="text" placeholder='Your Name' />
                <input className='border-2 p-2 border-black block text-black rounded-sm' type="email" placeholder='Your Email' />
                <input className='border-2 p-2 border-black block text-black rounded-sm' type="text" placeholder='Subject' />
                <textarea className='border-2 p-2 border-black block text-black rounded-sm' placeholder='Message' />
                <button className='rounded-2xl bg-red-700 p-4'>SEND MESSAGE</button>
            </form>

            {/* Footer */}
            <div className='mt-16 text-center pb-6'>
                Copyright ©2022 All rights reserved | This template is made with  by Anish
            </div>

        </div>
    )
}

export default ui