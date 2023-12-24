import { get_users, deleteUserData } from '@/app/component/service/Api';
import React from 'react'
import Link from 'next/link';
import HandleDelete from './handleDelete';

export default async function ViewAll() {
    const users = await get_users();

    // const handleDelete = async (id) => {
    //     try {
    //       await deleteUserData(id);
    //       // Handle success (e.g., update UI, show a success message)
    //     } catch (error) {
    //       console.error('Error during delete request:', error);
    //       // Handle error (e.g., show an error message)
    //     }
    //   };
    //   loadUsers();
    // const loadUsers = async () => {
    // 	const result = await axios.get(
    // 		"http://localhost:8082/users",
    // 		{
    // 			validateStatus: () => {
    // 				return true;
    // 			},
    // 		}
    // 	);
    // 	if (result.status === 302) {
    // 		setUsers(result.data);
    // 	}
    // };
    // console.log("USERS",users);
    return (
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-row h-full mb-5">
                <div className="w-full mx-auto p-2 bg-white shadow-lg rounded-sm border border-gray-200">
                    <header className="px-3 py-4 border-b border-gray-100">

                        {/* <div className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    USER LIST
                </div> */}
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
                                        {/* <th className="p-1 md:p-2 md:whitespace-nowrap">
                        <div className="font-semibold text-center">ID</div>
                        </th> */}
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
                                            {/* <td className="p-1 md:p-2 md:whitespace-nowrap">
                        <div className="text-center">{udata.id}</div>
                        </td> */}
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
                                                <button className="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                                        <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
                                                        <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
                                                    </svg>
                                                </button>
                                            </td>
                                            <td className="px-1 py-2 border text-red-100 rounded bg-gradient-to-r from-red-500 to-red-800 text-center">
                                                <HandleDelete iddata={udata.id} />
                                                {/* <button onClick={() => handleDelete(udata.id)}  className="btn btn-warning ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                                        <path fillRule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z" clipRule="evenodd" />
                                                    </svg>

                                                </button> */}
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
