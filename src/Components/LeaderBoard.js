import React from "react";
import { GiAchievement } from "react-icons/gi";
// Function to map badge based on marks
const getBadge = (marks) => {
  if (marks > 90) return "Gold";
  else if (marks > 80) return "Silver";
  else if (marks > 70) return "Bronze";
  else return "Good Luck";
};

export default function LeaderBoard() {
  // Sample data fetched from the backend (replace with actual data fetching logic)
  const studentsData = [
    { name: "Joe", marks: 98 },
    { name: "Thomas", marks: 86 },
    { name: "Arooj", marks: 73 },
    { name: "Amina", marks: 68 },
    { name: "Ali", marks: 67 },
    { name: "Iqra", marks: 50 },
    // Add more data here
  ];

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Student
              </th>
              <th scope="col" className="px-6 py-3">
                Marks
              </th>
              <th scope="col" className="px-6 py-3">
                Badge
              </th>
            </tr>
          </thead>
          <tbody>
            {studentsData.map((student, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="flex items-center px-6 py-4">
                  {/* Student name */}
                  <span className="font-medium text-gray-900 dark:text-white">
                    {student.name}
                  </span>
                </td>
                <td className="px-6 py-4">{student.marks}</td>
                <td className="px-6 py-4">
                  {index < 3 ? getBadge(student.marks) : "Good Luck"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
