import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { useGetAllJob } from './hook/useGetAllJob'
import { Link, useNavigate } from 'react-router-dom';

const Sample = () => {
    const nagivate = useNavigate()
    const [modal, setModal] = useState(false);
    const { jobData, isError, isSuccess } = useGetAllJob();

    const handleCheckDetails = (d) => {
        console.log('id: ' + d);
        setModal(d);
    }

    const closeModal = () => {
        console.log('yes');
        setModal(false);
    };

    const handleApply = () => {
        nagivate('/apply', { state: { modal } })
        // console.log(modal);
    }

    console.log('iserror', isError);


    return (
        <div>
            <div className='grid grid-cols-2 gap-2 lg:flex justify-around'>
                <div className='flex gap-2'>
                    <i class="fa-solid fa-magnifying-glass mt-1"></i>
                    <p>Java Developer</p>
                </div>

                <div className='flex gap-2'>
                    <i className="fa-solid fa-location-dot mt-1"></i>
                    <p>Mary Land Los Angeles</p>
                </div>

                <div className='flex'>
                    <i class="fa-solid fa-lock-keyhole"></i>
                    <p>2+ Years Experience</p>
                </div>

                <div className='flex gap-2 '>
                    <p className='mt'>Salary Range(Month) </p>
                    <p>$2400 - $900</p>
                </div>
            </div>

            <div className='mt-3 text-center'>
                <h1 className='font-bold text-2xl'>Job Match Dashboard</h1>
            </div>

            <div>
                {isError && <p className="text-red-500">{isError}</p>}
                {/* {isSuccess && <p className="text-green-500">{isSuccess}</p>} */}
            </div>

            <div className="flex justify-center bg-red-90 py-6">
                <div className="grid grid-cols-2 gap-3 w-fit sm:grid-cols-3 lg:grid-cols-5">
                    {
                        jobData?.map((el, i) => (
                            <div key={i} className="bg-white shadow-md w-full sm:w-[95%] lg:w-[240px] min-h-[25vh] flex flex-col justify-between px-3 py-4">
                                <div>
                                    <h1 className='text-2xl font-bold text-blue-700'>{el?.company}</h1>
                                    <p>{el?.title}</p>
                                    <p>{el?.location}</p>
                                </div>

                                <div className='flex justify-around mt-auto'>
                                    <Button onClick={() => handleCheckDetails(el)} className="h-8 bg-slate-400">Details</Button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${modal ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="relative bg-white text-gray-900 w-[90%] max-w-lg rounded-lg shadow-lg p-6 transition-transform transform duration-300 ease-in-out scale-100">
                    <button onClick={closeModal} className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-xl">
                        <i className="fa-solid fa-xmark"></i>
                    </button>

                    {modal && (
                        <div>
                            <h1 className="font-bold text-3xl text-center text-blue-700">Job Details</h1>

                            <div className="mt-4 space-y-2">
                                <p className="text-lg"><span className="font-semibold">Company:</span> {modal.company}</p>
                                <p className="text-lg"><span className="font-semibold">Title:</span> {modal.title}</p>
                                <p className="text-lg"><span className="font-semibold">Location:</span> {modal.location}</p>
                                <p className="text-lg"><span className="font-semibold">Salary:</span> {modal.salary}</p>
                                <p className="text-lg"><span className="font-semibold">Grade:</span> {modal.matchScore}</p>
                            </div>

                            <h2 className="font-bold text-2xl mt-6 text-blue-700">Required Skills</h2>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {modal.requiredSkills.map((skill, i) => (
                                    <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>


                            <div className="flex justify-center mt-6">
                                <Button onClick={() => handleApply()} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">
                                    Apply Now
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>


            <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        <div>
                            <h2 className="text-xl font-bold text-white">JobMatch</h2>
                            <p className="mt-2 text-sm">Helping you find the perfect job that matches your skills.</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                            <ul className="mt-2 space-y-2">
                                <li><a href="/" className="hover:text-blue-400">Home</a></li>
                                <li><a href="/jobs" className="hover:text-blue-400">Jobs</a></li>
                                <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
                                <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white">Contact</h3>
                            <p className="mt-2 text-sm">📍 123 Job Street, Los Angeles, CA</p>
                            <p className="mt-2 text-sm">📞 +1 234 567 890</p>
                            <p className="mt-2 text-sm">📧 support@jobmatch.com</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                            <div className="mt-2 flex space-x-4">
                                <a href="#" className="hover:text-blue-400"><i className="fa-brands fa-facebook text-2xl"></i></a>
                                <a href="#" className="hover:text-blue-400"><i className="fa-brands fa-twitter text-2xl"></i></a>
                                <a href="#" className="hover:text-blue-400"><i className="fa-brands fa-linkedin text-2xl"></i></a>
                                <a href="#" className="hover:text-blue-400"><i className="fa-brands fa-instagram text-2xl"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
                        <p>&copy; {new Date().getFullYear()} JobMatch. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Sample
