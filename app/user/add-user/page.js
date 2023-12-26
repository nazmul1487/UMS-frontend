'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation';

export default function AddUser() {

    const router = useRouter();

    const[user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        gender:"",
        contactNo:""
    })

    const {firstName, lastName, email, gender, contactNo} = user;

    const handleInputChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

    const saveUser = async (e) => {
		e.preventDefault();
        try {
            await axios.post(
			"http://localhost:8082/users",
			user
		);
        } catch (error) {
            
            alert("The User Mail address is already exists. Use an unique Email.");
            router.push('/user/add-user');
            throw error;
            
        }
		
        router.push('/user/view-users');
        router.refresh()
	};

    return (
        
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-row h-full mb-5">
                <div className="w-full mx-auto p-2 bg-white shadow-lg rounded-sm border border-gray-200">
                    <header className="px-3 py-4 border-b border-gray-100">
                        <div className="flex flex-row justify-between text-xl font-bold leading-none text-gray-900 dark:text-white">
                            <div>Add New User</div>
                            {/* <Link href="/user/add-user" className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full text-sm'>Add New User</Link> */}

                        </div>
                    </header>
                    <div className="p-0 md:p-2">
                        <div className="flex-wrap ">
                            <form onSubmit={(e) => saveUser(e)} className="max-w-md mx-auto">
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input value={firstName} onChange={(e) => handleInputChange(e)} type="text" name="firstName" id="firstName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                                    <label htmlFor="firstName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter User First Name</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input value={lastName} onChange={(e) => handleInputChange(e)} type="text" name="lastName" id="lastName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="lastName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter User Last Name</label>
                                </div>
                            </div>    
                                <div className="relative z-0 w-full mb-5 group">
                                    <input value={email} onChange={(e) => handleInputChange(e)} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Email Address</label>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input value={gender} onChange={(e) => handleInputChange(e)} type="text" name="gender" id="gender" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Gender</label>
                                </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input value={contactNo} onChange={(e) => handleInputChange(e)} type="text" name="contactNo" id="contactNo" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="contactNo" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Mobile Number</label>
                                    </div>
                                    </div>
                                
                                {/* <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
                                    </div>
                                </div> */}
                                <div className="flex flex-wrap justify-evenly">  
                                <Link href="/user/view-users" className="px-6 py-2 text-red-100 rounded bg-gradient-to-r from-red-600 to-red-400 hover:from-red-600 hover:to-red-800">Cancel</Link>
                                <button type="submit" className="px-6 py-2 text-green-100 rounded bg-gradient-to-r from-green-600 to-green-400 hover:from-green-600 hover:to-green-800">Submit</button>

                                </div>
                                {/* <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> */}
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
