import React from "react";
import analytics from '../Images/data-analysis.jpg'
import viewquiz from '../Images/viewquizbg.jpg'

export default function Analytics() {
  return (
    <div className="flex">
      
        <img src={analytics} className="w-[30%]"/>
        <h1 className="text-center text-xl font-bold text-purple mt-[25%] ml-[-25%]"> Analytics and Performance Reports</h1>
      <div className="flex mt-[15%] w-[70%] justify-evenly" >
        <div>
          <h3>Quiz Title</h3>
        </div>
        <div>
          <h3>Total Attempt</h3>
        </div>
        <div>
          <h3>Total Badage</h3>
        </div>
        <div>
          <h3>Average Score</h3>
        </div>  
      </div>
    </div>
  );
}
