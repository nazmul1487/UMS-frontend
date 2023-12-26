import { get_users, deleteUserData } from '@/app/component/service/Api';
import React from 'react'
import Link from 'next/link';
import HandleDelete from './handleDelete';

export default async function ViewAll() {

    const users = await get_users();

    return (
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-row h-full mb-5">
                <div className="w-full mx-auto p-2 bg-white shadow-lg rounded-sm border border-gray-200">
                    <header className="px-3 py-4 border-b border-gray-100">
                        <div class="flex flex-row justify-between text-xl font-bold leading-none text-gray-900 dark:text-white">

                            <div>USER LIST</div>
                            <Link href="/user/add-user" className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full text-sm'>Add New User</Link>
                        </div>
                    </header>

                    <div className="p-0 md:p-2">
                        <div className="flex-wrap  ">
                            <table className="table-auto w-full ">
                                <thead className="text-sm font-semibold uppercase text-black  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                                    <tr className='border'>
                                       <th className="p-1 md:p-2 md:whitespace-nowrap">
                                            <div className="font-semibold text-center">FIRST-NAME</div>
                                        </th>
                                        <th className="p-1 md:p-2 md:whitespace-nowrap ">
                                            <div className="font-semibold text-center">LAST-NAME</div>
                                        </th>
                                        <th className="p-1 md:p-2 md:whitespace-nowrap ">
                                            <div className="font-semibold text-center">EMAIL</div>
                                        </th>
                                        <th className="p-1 md:p-2 md:whitespace-nowrap ">
                                            <div className="font-semibold text-center">GENDER</div>
                                        </th>
                                        <th className="p-1 md:p-2 md:whitespace-nowrap ">
                                            <div className="font-semibold text-center">CONTACT NO</div>
                                        </th>
                                        <th colSpan={3} className="p-1 md:p-2 md:whitespace-nowrap ">
                                            <div className="font-semibold text-center">ACTION</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100">
                                    {users.map((udata, index) =>

                                        <tr key={index}>
                                            <td className="p-1 md:p-2">
                                                <div className=" items-center text-center">

                                                    <div className="sm:text-sm font-medium text-gray-800">
                                                        {" "}
                                                        {udata.firstName} 
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-1 md:p-2 md:whitespace-nowrap">
                                                <div className="text-center">{udata.lastName}</div>
                                            </td>
                                            <td className="p-1 md:p-2 md:whitespace-nowrap">

                                                <div className="text-center font-bold">{udata.email}</div>
                                            </td>
                                            <td className="p-1 md:p-2 md:whitespace-nowrap">

                                                <div className="text-center font-bold">{udata.gender}</div>
                                            </td>
                                            <td className="p-1 md:p-2 md:whitespace-nowrap">

                                                <div className="text-center font-bold">{udata.contactNo}</div>
                                            </td>
                                            <td className="px-1 py-2 text-blue-100 rounded bg-gradient-to-r from-blue-600 to-blue-400 border">
                                                <Link href={`/user/view-users/${udata.id}`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 m-auto">
                                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                                                        <path fillRule="evenodd" d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clipRule="evenodd" />
                                                    </svg>

                                                </Link>
                                            </td>
                                            <td className="px-1 py-2 text-green-100 rounded bg-gradient-to-r from-red-400 via-yellow-600 to-yellow-500 text-center">
                                                <Link href={`/user/view-users/update/${udata.id}`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 m-auto">
                                                        <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
                                                        <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
                                                    </svg>
                                                </Link>
                                            </td>
                                            <td className="px-1 py-2 border text-red-100 rounded bg-gradient-to-r from-red-500 to-red-800 text-center">
                                                <HandleDelete iddata={udata.id} />
                                            </td>

                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
