import React from "react";
import { Card, Button } from "flowbite-react";
import trivia from "../Images/bulb.jpg";
import { Link } from "react-router-dom";
import crown from "../Images/crown.jpg";
import win from "../Images/win.jpg";

export function SectionTwo() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold ml-11 pt-10 w-1/2 text-purple text-center">
          Play, Learn and Earn Bonus
        </h1>
        <h4 className="text-3xl font-bold ml-11 pt-5 w-1/2 text-purple text-center">
          Check yourself!! Earn yourself
        </h4>
      </div>
      <h3 className="text-xl font-bold pl-12 pt-20 w-1/2 text-gray-700 text-center ml-18">
        Choose the option
      </h3>
      <div className=" mt-10">
        <div className="cardWrapper">
          <Card className="w-96 h-20 ">
            <img src={trivia} className="img-hw" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              Daily Trivia
            </h5>
            <Link to="/signup" className="bg-purple text-white font-bold btn-read-more">
              Read more
            </Link>
          </Card>
          <Card className="w-96 h-20 ml-10 mr-10 ">
            <img src={win} className="img-hw" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              Daily Play & Win
            </h5>
            <Link to="/signup" className="bg-purple text-white font-bold btn-read-more ">
              Read more
            </Link>
          </Card>
          <Card className="w-96 h-20">
            <img src={crown} className="img-hw" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              Play Like king
            </h5>
            <Link to="/signup" className="bg-purple text-white font-bold btn-read-more">
              Read more
            </Link>
          </Card>
        </div>
      </div>
    </>
  );
}
