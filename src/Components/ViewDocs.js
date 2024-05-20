import React from 'react'
import LeaderBoard from "./LeaderBoard";
import { Link } from "react-router-dom";
import { FaCrown } from "react-icons/fa";


export default function ViewDocs() {
  return (
    <div className='flex'>
        <div className='w-[70%] ml-5'>
        <h3 className='w-[60%] mt-10 pt-5 pb-5 rounded-lg text-center text-xl bg-purple'>Recently Uploaded Docs</h3>
      <div className='mt-[2%]'>
       <Link to='/' className='text-gray-400 font-bold'>
        assignment 1.pdf 192kb  5 hour ago
       </Link>
      </div>

      <div className='mt-[2%]'>
       <Link to='/' className='text-gray-400 font-bold '>
        assignment 2.pdf 80kb  8 hour ago
       </Link>
      </div>

      <div className='mt-[2%]'>
       <Link to='/' className='text-gray-400 font-bold'>
        Quiz Solution.doc 192kb  1 day ago
       </Link>
      </div>
      </div>
      <div className="leaderboardWrapper mt-10 mr-10">
        <h3 className="bg-purple text-white h-16 text-center pt-7 font-bold rounded-lg">
          LeaderBoard
          <FaCrown className='crown'/>
        </h3>
        <LeaderBoard />
      </div>
    </div>
  )
}
