import React from "react";
import img from "../Images/img.jpg";

export default function SectionOne() {
  return (
    <div className="section-wrapper">
      <div className="banner-text">
        <h3 className="text-5xl font-bold pl-12 pt-20 w-1/2 text-gray-700">
          Daily Quiz, Daily <br />
          Bonus- Play Today
        </h3>
        <h5 className="w-1/2 text-base font-bold pl-12 pt-5 text-gray-700">
          QuizWiz is a daily quiz playing platfrm. It brings some <br />
          exciting surprises every day.
        </h5>
      </div>
      <img className="w-1/3 float-right mt--15" src={img} />
    </div>
  );
}
