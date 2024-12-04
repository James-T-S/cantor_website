export default function courses() {

    function displayCourseTable() {
        fetch("./CourseList.json")
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
            })
    }

    return (
        <div>

        </div>
    );
}