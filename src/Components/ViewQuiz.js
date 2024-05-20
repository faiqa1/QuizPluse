import React from 'react'
import { Card } from "flowbite-react";
import { FaCrown } from "react-icons/fa";
import LeaderBoard from './LeaderBoard';

export default function ViewQuiz() {
  return (
    <div className='flex'>
    <div className='w-4/5 mt-5'>
    <Card href="#" className="max-w-sm hover:bg-purple text-center mx-auto mt-5 bg-purple effect-0 rounded-lg">
      <h5 className="text-2xl font-bold  text-white">
       Quiz-I
      </h5>
      <p className="font-normal text-white">
       Communicatin and Presentation Skills
      </p>
    </Card>
    <Card href="#" className="max-w-sm hover:bg-purple text-center mx-auto mt-5 bg-purple">
      <h5 className="text-2xl font-bold text-white">
       Quiz-II
      </h5>
      <p className="font-normal text-white">
       Communicatin and Presentation Skills
      </p>
    </Card>
    </div>
    <div className='leaderboard mt-10 mr-10'>
      <h3 className='bg-purple text-white h-16 text-center pt-7 font-bold rounded-lg'>LeaderBoard
      <FaCrown className='crown'/>
      </h3>

       <LeaderBoard/>
    </div>
    </div>
  );
}
