import React from "react";
import { TypeAnimation } from 'react-type-animation';
import img from "../Images/img.jpg";
import { Link } from "react-router-dom";
import Coin from '../Images/dollarCoin.png'

export default function SectionOne() {
  return (
    <div className="section-wrapper">
      <div className="banner-text">
        {/* <h3 className="text-5xl font-bold pl-12 pt-20 w-1/2 text-gray-700">
          Daily Quiz, Daily <br />
          Bonus- Play Today
        </h3> */}
         <TypeAnimation
       className= "text-5xl font-bold pl-12 pt-20 w-1/2 text-gray-700"
      sequence={[
        'Daily Quiz', // Types 'One'
        1000, // Waits 1s
        'Daily  Bonus', // Deletes 'One' and types 'Two'
        1000, // Waits 2s
        'Play Today', // Types 'Three' without deleting 'Two'
        1000, 
        'Daily Quiz, Daily  Bonus- Play Today',
        1000, 
        'Daily Quiz, Daily  Bonus- Play Today',
        1000, 
        'Daily Quiz, Daily  Bonus- Play Today',
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
        <h5 className="w-1/2 text-base font-bold pl-12 pt-5 text-gray-700">
          QuizWiz is a daily quiz playing platfrm. It brings some <br />
          exciting surprises every day.
        </h5>
        <h5 className="w-1/2 text-base font-bold pl-12  text-gray-700">
        Join now to unlock daily bonuses and special features that make learning enjoyable and rewarding. Don't miss out on the chance to be the top quiz master. Play today and make every day a learning adventure with QuizWiz!
        </h5>

        <div class="relative inline-flex group ml-10 mt-5">
        <div
          class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#CF69CA;] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200">
        </div>
        <Link to='/signup'
          class="relative inline-flex items-center justify-center px-5 py-2 text-base font-bold text-white transition-all duration-200 bg-purple border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-900 hover:bg-purple rounded">
          Play Now <img className="w-10 h-10" src={Coin}/>
        </Link>
      </div>
        {/* <Button className="flex ml-10 mt-5 bg-purple text-white font-extrabold">Play Now</Button> */}
      </div>
      <img className="w-1/3 float-right mt--15" src={img} />
    </div>
  );
}
