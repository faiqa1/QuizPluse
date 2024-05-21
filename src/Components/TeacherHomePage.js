import React from "react";
import { Card } from "flowbite-react";
import annoucement from "../Images/annoucement.jpg";
import feedback from "../Images/feedback.jpg";
import upload from "../Images/addDoc.jpg";
import createQuiz from "../Images/createQuiz.jpg";
import LeaderBoard from "./LeaderBoard";
import { Link } from "react-router-dom";
import { FaCrown } from "react-icons/fa";
import Analytics from "./Analytics";


export default function TeacherHomePage() {
  return (
    <>
    <div className="teacherHomepageWrapper flex">
      <div className="cardWrapper mt-5">
        <Link to="/cquiz">
          <Card className="w-96 h-64 m-5" imgSrc={createQuiz} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Create Quiz
            </h5>
            <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </Card>
        </Link>
        <Link to="/uploadoc">
          <Card className="w-96 h-64 m-5" imgSrc={upload} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Upload Resource and Material
            </h5>
            <p className="font-normal text-sm  text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </Card>
        </Link>
        <Link to="/viewquiz">
          <Card
            className="max-w-sm w-96 h-64 m-5"
            imgSrc={annoucement}
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Recently Quiz
            </h5>
            <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Card>
        </Link>
        <Link to="/comment">
          <Card className="max-w-sm w-96 h-64 m-5" imgSrc={feedback} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Discussion Forum
            </h5>
            <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Card>
        </Link>
      </div>
      <div className="leaderboardWrapper mt-10 mr-10">
        <h3 className="bg-purple text-white h-16 text-center pt-7 font-bold rounded-lg">
          LeaderBoard
          <FaCrown className='crown'/>
        </h3>
        <LeaderBoard />
      </div>
    </div>
    <Analytics/>
    </>
  );
}
