import React from "react";

const CoursesProgress: React.FC = () => {
  const courses = [
    { title: "ICT Basics", duration: "4 weeks", level: "Beginner" },
    { title: "MS Office Mastery", duration: "6 weeks", level: "Intermediate" },
    { title: "Digital Literacy", duration: "3 weeks", level: "Beginner" },
    { title: "Mobile Banking", duration: "2 weeks", level: "Beginner" },
    { title: "Irembo Navigation", duration: "2 weeks", level: "Beginner" },
    {
      title: "Entrepreneurship 101",
      duration: "8 weeks",
      level: "Intermediate",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Featured Training Courses
        </h2>
        <p className="text-gray-600 mb-10">
          Popular courses designed to equip you with in-demand skills.
        </p>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-100"
            >
              {/* Title + Level */}
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  {course.title}
                </h3>

                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    course.level === "Beginner"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {course.level}
                </span>
              </div>

              {/* Duration */}
              <p className="text-gray-600 mb-6">Duration: {course.duration}</p>

              {/* Button */}
              <button className="w-full bg-teal-700 hover:bg-teal-800 text-white py-2 rounded-md transition">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesProgress;
