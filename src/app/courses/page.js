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

  let foundationYear = "Has Foundation Year"


  return (
    <div>
      <h1 className='title'>Course List</h1>
      <div className="course-list">
        {courseData ? (
          courseData.map((course, index) => (
            <div key={index}>
              <h1>{course.CourseTitle}</h1>
              <h2>{course.CourseSummary}
                <br />
                <br />
                <ul>
                  <li>{course.CourseType}</li>
                  <li>{course.CourseAwardName}</li>
                  <li>{course.UcasCode}</li>
                  <li>{course.UcasPoints}</li>
                  <li>{course.YearOfEntry}</li>
                  <li>{course.ModeOfAttendance}</li>
                  <li>{course.StudyLength}</li>
                  <li>{course.HasFoundationYear ? "Has Foundation Year" : "No Foundation Year"}</li>
                  <li>{course.CourseSubject}</li>
                  <li>{course.NoLongerRecruiting ? "Spaces Left" : "No Spaces Left"}</li>
                </ul>
              </h2>
            </div>
          ))
        ) : (
          <p>data is loading</p>
        )}
      </div>
    </div>
  );
}
