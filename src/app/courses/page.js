'use client'
import {useState, useEffect} from 'react';
import "./courses.css";

export default function courses() {

    const [courseData, setCourseData] = useState(null);
    const dataURL = '/data/courseList.json';

/*  function displayCourseTable() {
    fetch("./courseList.json")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((item) => {
          row = document.createElement("tr");
          titleCell = document.createElement("td");
          summaryCell = document.createElement("td");
          codeCell = document.createElement("td");
          
          titleCell.textContent = item.CourseTitle;
          summaryCell.textContent = item.CourseSummary;
        });
      });
  }*/

      useEffect(()=>{
        fetch(dataURL)
        .then(response => response.json())
        .then(data =>{
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
              <h3>{course.CourseTitle}</h3>
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
