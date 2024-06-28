import React from "react";
import signup from "../Images/sign-up.jpg";
import profile from "../Images/createAccount.jpg";
import play from "../Images/startQuiz.jpg";

export default function HowItWorks() {
  return (
    <div className=" mt-10 " id="hitw">
      <h1 className="text-purple font-bold text-2xl text-center">
        How it works?
      </h1>
      <div className="flex justify-content">
        <div>
          <img src={signup} className="w-[302px]" alt="signup"/>
          <h4 className="text-gray-700 font-bold text-xl text-center">
            Signup
          </h4>
        </div>

        <div>
          <img src={profile} className="w-[302px]" alt="proofule"/>
          <h4 className="text-gray-700 font-bold text-xl text-center">
            Create Profile
          </h4>
        </div>

        <div>
          <img src={play} className="w-[280px]" alt="play" />
          <h4 className="text-gray-700 font-bold text-center mt-7 text-xl ">
            Start Play
          </h4>
        </div>
      </div>
    </div>
  );
}
