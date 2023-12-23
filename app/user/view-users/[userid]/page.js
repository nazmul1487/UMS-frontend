import React from 'react'
import { get_user_by_id } from '@/app/component/service/Api';
import Link from 'next/link';
import Image from 'next/image'

export default async function UserInfo( {params}) {
    // console.log("Params",params.userid)
    const userData = await get_user_by_id(params.userid);
    console.log("UserData::", userData);
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-4">
    <div className="flex flex-row h-full mb-5">
        <div className="w-full mx-auto p-2 bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-3 py-4 border-b border-gray-100">
                <div className="flex flex-row justify-evenly text-xl font-bold leading-none text-gray-900 dark:text-white">
                    <div>
                        <Image src="/images/default.jpg" width={200} height={200} alt="Picture of the author" />
                        <p>
                            {userData.firstName} {userData.lastName}
                        </p>
                    </div>
                     
                    <ul className='mt-5 text-base font-medium'>
                        <ol className='my-3'><span className='font-bold'>Full Name: </span>{userData.firstName} {userData.lastName}</ol>
                        <ol className='my-3'><span className='font-bold'>Email Address: </span>{userData.email}</ol>
                        <ol className='my-3'><span className='font-bold'>Mobile: </span>{userData.contactNo}</ol>
                        <div className="flex flex-wrap justify-evenly my-10">  
                            <Link href="/user/view-users" className="px-6 py-2 text-red-100 rounded bg-gradient-to-r from-red-600 to-red-400 hover:from-red-600 hover:to-red-800">Go Back</Link>
                            <Link href="" className="px-6 py-2 text-green-100 rounded bg-gradient-to-r from-red-400 via-yellow-600 to-yellow-500 text-center">Edit</Link>

                        </div>
                            
                    </ul>
                    {/* <div className='flex flex-row justify-between'>
                        <div class="p-0.5 rounded bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500">
                            <button class="px-6 py-2 text-blue-800 bg-white">Button</button>
                        </div>
                        <div class="p-0.5 rounded bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500">
                            <button class="px-6 py-2 text-blue-800 bg-white">Button</button>
                        </div>
                    </div> */}

                </div>
            </header>
            
        </div>
    </div>
</div>
  )
}
