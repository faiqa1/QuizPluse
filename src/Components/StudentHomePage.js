import React from 'react'
import { Card } from "flowbite-react";
import attemptQuiz from '../Images/attemptQuiz.jpg'
import annoucement from '../Images/annoucement.jpg'
import feedback from '../Images/feedback.jpg'
import resource from '../Images/resource.jpg'
import { Link } from 'react-router-dom';
import LeaderBoard from './LeaderBoard';

export default function StudentHomePage() {
  return (
    <div className='studentHomePageWrapper flex'>
    <div className='cardWrapper mt-10'>
        <Link to =''>
      <Card className="max-w-sm w-96 h-64 m-5" imgSrc={attemptQuiz} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       Attempt Quiz
      </h5>
      <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
      Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </Card> 
    </Link>
    <Link to =''>
    <Card className="max-w-sm w-96 h-64 m-5" imgSrc={resource} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       Resource and Material 
      </h5>
      <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </Card>
    </Link>
    <Link to ='/viewquiz'>
    <Card className="max-w-sm w-96 h-64 m-5" imgSrc={annoucement} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       Annoucement
      </h5>
      <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </Card>
    </Link>
    <Link to ='/comment'>
    <Card className="max-w-sm w-96 h-64 m-5" imgSrc={feedback} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       Discussion Forum
      </h5>
      <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </Card>
    </Link>
    </div>
    <div className='leaderboard mt-10 mr-10'>
      <h3 className='bg-purple text-white h-16 text-center pt-7 font-bold rounded-lg'>LeaderBoard</h3>
       <LeaderBoard/>
    </div>
    </div>
  )
}
