import React from 'react'
import { get_user_by_id } from '@/app/component/service/Api';

import Link from 'next/link';
import UpdateInfoForm from './updateInfoForm';

export default async function UpdateUser( {params}) {
    const userData = await get_user_by_id(params.userid);

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-row h-full mb-5">
                <div className="w-full mx-auto p-2 bg-white shadow-lg rounded-sm border border-gray-200">
                    <header className="px-3 py-4 border-b border-gray-100">
                        <div className="flex flex-row justify-between text-xl font-bold leading-none text-gray-900 dark:text-white">
                            <div>Update User Data</div>
                            {/* <Link href="/user/add-user" className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full text-sm'>Add New User</Link> */}

                        </div>
                    </header>
                    <div className="p-0 md:p-2 my-3">
                        <UpdateInfoForm userData={userData}/>
                    </div>
                </div>
            </div>
        </div>
  )
}
