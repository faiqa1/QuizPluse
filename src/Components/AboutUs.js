import React from "react";
import about from "../Images/aboutus.png";
export default function AboutUs() {
  return (
    <div className="aboutUs mt-10 ml-12 flex" id="about">
      <img className="w-1/3" src={about} />
      <div className="ml-10">
        <h2 className="text-purple font-bold text-xl">About Us</h2>
        <p className="text-gray-700  w-9/12">
          At QuizWiz, we believe that learning should be fun, interactive, and
          accessible to everyone. Our app offers a diverse range of quizzes on
          topics from general knowledge to niche interests, designed to
          challenge your mind and enhance your understanding. Whether you're
          competing with friends, preparing for a test, or simply passing time,
          QuizMaster provides a dynamic and rewarding experience. Join our
          community of curious minds and discover a smarter, more enjoyable way
          to learn! . With quizzes spanning a wide array of subjects and
          difficulty levels, there's something for everyone. Whether you're
          looking to challenge yourself, compete with friends, or prepare for an
          exam, QuizWiz offers an engaging and educational platform that makes
          learning fun and interactive. Join us today and turn every question
          into an opportunity for growth!
        </p>
      </div>
    </div>
  );
}
