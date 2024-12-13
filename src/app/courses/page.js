'use client'
import { useState, useEffect } from 'react';
import "./courses.css";

export default function courses() {

  const [courseData, setCourseData] = useState(null);
  const dataURL = '/data/courseList.json';

  useEffect(() => {
    fetch(dataURL)
      .then(response => response.json())
      .then(data => {
        setCourseData(data);
        console.dir(data);
      })
  }, [])

  return (
    <div>
      <h1>Course List</h1>
      <div className="course-list">
        {courseData ? (
          courseData.map((course, index) => (
            <div key={index}>
              <h1>{course.CourseTitle}</h1>
              <p>{course.CourseSummary}</p>
            </div>
          ))
        ) : (
          <p>data is loading</p>
        )}
      </div>
    </div>
  );
}
