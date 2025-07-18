import './css/View.css';
export default function View({ generalInfo, education, experienceArr }) {
  return (
    <section className="view-main sb-shadow sb-smooth-appear">
      <div className="flex-col general-info">
        <div className="name">
          <h1> {generalInfo.name}</h1>
        </div>
        <div className="flex-row email-phone">
          <div className="flex-row">
            <svg
              className="sb-icon-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>email-arrow-right</title>
              <path d="M13 19C13 15.69 15.69 13 19 13C20.1 13 21.12 13.3 22 13.81V6C22 4.89 21.1 4 20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.9 20 4 20H13.09C13.04 19.67 13 19.34 13 19M4 8V6L12 11L20 6V8L12 13L4 8M20 22V20H16V18H20V16L23 19L20 22Z" />
            </svg>
            {generalInfo.email}
          </div>
          <div className="flex-row">
            <svg
              className="sb-icon-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>phone</title>
              <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
            </svg>
            <p>{generalInfo.phone}</p>
          </div>
        </div>
      </div>
      <div className="flex-col cv-block">
        <div className="flex-row block-header">
          <svg
            className="sb-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>face-man-profile</title>
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,8.39C13.57,9.4 15.42,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20C9,20 6.39,18.34 5,15.89L6.75,14V13A1.25,1.25 0 0,1 8,11.75A1.25,1.25 0 0,1 9.25,13V14H12M16,11.75A1.25,1.25 0 0,0 14.75,13A1.25,1.25 0 0,0 16,14.25A1.25,1.25 0 0,0 17.25,13A1.25,1.25 0 0,0 16,11.75Z" />
          </svg>
          <h2>Profile</h2>
        </div>
        <span className="sb-spacer"></span>
        <div className="block-text">{generalInfo.about}</div>
      </div>

      <div className="flex-col cv-block">
        <div className="flex-row block-header">
          <svg
            className="sb-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>briefcase</title>
            <path d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z" />
          </svg>
          <h2>Experience</h2>
        </div>
        <span className="sb-spacer"></span>
        {experienceArr.map((experience) => (
          <div key={experience.id}>
            <div className="flex-row experince-header">
              <h3>{experience.company}</h3>|<h3>{experience.position}</h3>|
              <h3>
                {experience.from} - {experience.to}
              </h3>
            </div>
            <div className="block-text">{experience.responsibilities}</div>
          </div>
        ))}
      </div>

      <div className="flex-col cv-block">
        <div className="flex-row block-header">
          <svg
            className="sb-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>school</title>
            <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
          </svg>
          <h2>Education</h2>
        </div>
        <span className="sb-spacer"></span>
        <div className="flex-col education-header">
          <h3>
            <em>{education.study}</em>
          </h3>
        </div>
        <div className="block-text">
          <p>{education.school}</p>
          <p>{education.date}</p>
        </div>
      </div>
    </section>
  );
}
