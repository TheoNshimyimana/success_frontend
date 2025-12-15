import React from "react";
import { ArrowRight } from "lucide-react";

interface CourseItem {
  title: string;
  level: string;
  description: string;
  duration: string;
  students: number;
  price: string;
  topics: string[];
  schedule: string;
}

const courses: CourseItem[] = [
  {
    title: "ICT Basics",
    level: "Beginner",
    description:
      "Introduction to computers, internet, and basic digital skills for beginners.",
    duration: "4 weeks",
    students: 25,
    price: "RWF 15,000",
    topics: [
      "Computer fundamentals",
      "Internet basics",
      "Email usage",
      "File management",
    ],
    schedule: "Weekdays 2-4 PM",
  },
  {
    title: "MS Office Mastery",
    level: "Intermediate",
    description:
      "Master Microsoft Office suite including Word, Excel, and PowerPoint.",
    duration: "6 weeks",
    students: 20,
    price: "RWF 25,000",
    topics: [
      "Word processing",
      "Spreadsheets",
      "Presentations",
      "Advanced features",
    ],
    schedule: "Weekdays 3-5 PM",
  },
  {
    title: "MS Office Mastery",
    level: "Intermediate",
    description:
      "Master Microsoft Office suite including Word, Excel, and PowerPoint.",
    duration: "6 weeks",
    students: 20,
    price: "RWF 25,000",
    topics: [
      "Word processing",
      "Spreadsheets",
      "Presentations",
      "Advanced features",
    ],
    schedule: "Weekdays 3-5 PM",
  },
  {
    title: "MS Office Mastery",
    level: "Intermediate",
    description:
      "Master Microsoft Office suite including Word, Excel, and PowerPoint.",
    duration: "6 weeks",
    students: 20,
    price: "RWF 25,000",
    topics: [
      "Word processing",
      "Spreadsheets",
      "Presentations",
      "Advanced features",
    ],
    schedule: "Weekdays 3-5 PM",
  },
  {
    title: "MS Office Mastery",
    level: "Intermediate",
    description:
      "Master Microsoft Office suite including Word, Excel, and PowerPoint.",
    duration: "6 weeks",
    students: 20,
    price: "RWF 25,000",
    topics: [
      "Word processing",
      "Spreadsheets",
      "Presentations",
      "Advanced features",
    ],
    schedule: "Weekdays 3-5 PM",
  },
  {
    title: "MS Office Mastery",
    level: "Intermediate",
    description:
      "Master Microsoft Office suite including Word, Excel, and PowerPoint.",
    duration: "6 weeks",
    students: 20,
    price: "RWF 25,000",
    topics: [
      "Word processing",
      "Spreadsheets",
      "Presentations",
      "Advanced features",
    ],
    schedule: "Weekdays 3-5 PM",
  },
  {
    title: "MS Office Mastery",
    level: "Intermediate",
    description:
      "Master Microsoft Office suite including Word, Excel, and PowerPoint.",
    duration: "6 weeks",
    students: 20,
    price: "RWF 25,000",
    topics: [
      "Word processing",
      "Spreadsheets",
      "Presentations",
      "Advanced features",
    ],
    schedule: "Weekdays 3-5 PM",
  },
  {
    title: "MS Office Mastery",
    level: "Intermediate",
    description:
      "Master Microsoft Office suite including Word, Excel, and PowerPoint.",
    duration: "6 weeks",
    students: 20,
    price: "RWF 25,000",
    topics: [
      "Word processing",
      "Spreadsheets",
      "Presentations",
      "Advanced features",
    ],
    schedule: "Weekdays 3-5 PM",
  },
  
];

function FeaturedCourses() {
  return (
    <div className="w-full py-20 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-3">Featured Courses</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose from our diverse range of courses designed to meet your
          learning goals.
        </p>
      </div>

      {/* Course Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {courses.map((course, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl text-sm hover:border-gray-400 shadow-sm p-10 bg-slate-50 hover:shadow-md transition relative"
          >
            {/* Level Badge */}
            <span className="absolute right-6 top-6 bg-[#F9F3D5] text-[#0D7377] text-xs px-3 py-1 rounded-full font-semibold">
              {course.level}
            </span>

            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-6 max-w-md">{course.description}</p>

            {/* Course Stats */}
            <div className="w-full border-t border-gray-200 border-b py-4 grid grid-cols-3 text-center mb-6 text-sm">
              <div>
                <p className="text-gray-500">Duration</p>
                <p className="font-semibold">{course.duration}</p>
              </div>
              <div>
                <p className="text-gray-500">Students</p>
                <p className="font-semibold">{course.students}</p>
              </div>
              <div>
                <p className="text-gray-500">Price</p>
                <p className="font-semibold text-emerald-700">{course.price}</p>
              </div>
            </div>

            {/* Topics */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-gray-500 mb-2 tracking-wide">
                TOPICS COVERED
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                {course.topics.map((topic, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            {/* Schedule */}
            <div className="bg-gray-100 rounded-xl p-4 text-sm mb-6">
              <p className="text-gray-600">
                <span className="font-semibold">Schedule</span>
                <br />
                {course.schedule}
              </p>
            </div>

            {/* Button */}
            <button className="w-full bg-[#0D7377] hover:bg-emerald-800 text-white py-1 rounded-lg cursor-pointer font-medium flex items-center text-sm justify-center gap-2">
              Enroll Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedCourses;
