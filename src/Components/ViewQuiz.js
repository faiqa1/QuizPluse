import React from 'react'
import { Card } from "flowbite-react";

export default function ViewQuiz() {
  return (
    <>
    <Card href="#" className="max-w-sm text-center mx-auto mt-5">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       Quiz-I
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       Communicatin and Presentation Skills
      </p>
    </Card>

    <Card href="#" className="max-w-sm text-center mx-auto mt-5">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       Quiz-II
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       Communicatin and Presentation Skills
      </p>
    </Card>
    </>
  );
}
