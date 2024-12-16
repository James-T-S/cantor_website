import "./staff.css";

export default function students() {


    return (
        <div>
            <img src="/Images/CheeseGrater.webp" alt="Cantor Front" className="resizeImage" />
            <h1 className="title">Information for Staff</h1>

            <h1>News</h1>

            <h2>
                Cantor College recently hosted the Software Engineering student of the year awards.
                Short-listed candidates from around the country attended the one day event.
            </h2>


            <h1>Academic Registry</h1>
            <div className="imageText">
                <h2>
                    For academic regulations, assessment, awards, student records and course validation.
                </h2>
                <img src="/Images/Gallery.webp" alt="Cantor Atrium" className="resizeImage" />
            </div>

            <h1>Catering Services</h1>

            <h2>
                Contact the Catering Services regarding on and off-site catering.
            </h2>


            <h1>Financial Services</h1>

            <h2>
                The financial team based on the 2nd Floor are responsible for
                all areas of student finance as well as College budgeting.
            </h2>


            <h1>Information Systems Services</h1>
            <div className="textImage">
                <h2>
                    The ISS team delivers the College’s computing facilities including all
                    hardware and software. They also run the staff helpdesk.
                </h2>
                <img src="/Images/CantorLab4.webp" alt="Cantor Atrium" className="resizeImage" />
            </div>


            <h1>Marketing Services</h1>

            <h2>
                The Marketing Team will help promote events and new courses.
                They will help with press release preparation.
            </h2>


            <h1>Personnel Services</h1>
            <div className="imageText">
                <h2>
                    All staff pay and conditions enquiries should be directed to
                    the Personnel Services team on the 3rd floor.
                </h2>
                <img src="/Images/LectureTheatre.webp" alt="Cantor Atrium" className="resizeImage" />
            </div>

            <h1>Facilities</h1>

            <h2>
                The facilities are responsible for the general care and maintenance
                of the College. All enquiries via the main helpdesk.
            </h2>
        </div>
    );
}