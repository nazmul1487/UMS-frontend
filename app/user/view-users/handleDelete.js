'use client'
import React,{useEffect} from 'react'
import { deleteUserData } from '@/app/component/service/Api';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function HandleDelete({iddata}) {

  const router = useRouter();

  // useEffect(() => {
  //   handleDelete();
  // }, []);
  const handleDelete = async () => {
    // console.log("button click working")
    try {
      const response = await axios.delete(`http://localhost:8082/users/delete/${iddata}`);

      window.location.reload();
      alert("User Delete Successfully.")
    } catch (error) {

      throw error;
      // console.error('Error during delete request:', error);
      // Handle error (e.g., show an error message)
    }
    
  };
  // router.reload();
  // console.log("HDHHDH",iddata)
  return (
    <button onClick={()=>handleDelete()} className="btn btn-warning ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z" clipRule="evenodd" />
      </svg>
    </button>
  )
}
