import { useState } from 'react';
import General from './General.jsx';
import Study from './Study.jsx';
import Work from './Work.jsx';
import View from './View.jsx';
import './css/Button.css';

import './css/Resume.css';
import './css/Form.css';
import { getRandomColor } from '@sarawebs/sb-utils';
export default function Resume() {
  const [isEditing, setIsEditing] = useState(true);

  const [generalInfo, setGeneralInfo] = useState({
    name: 'Mohammad Da',
    email: 'mohammad.dahamshi@gmail.com',
    phone: '0586776939',
    about:
      'Hi, I’m Mohammad Dahamshi, a passionate software engineer and creative problem solver with a deep love for clean code, elegant design, and building things that work. I specialize in full-stack development, embedded systems, and DevOps, combining my technical expertise with a sharp eye for usability and performance.',
  });
  const [education, setEducation] = useState({
    school: 'University Of Haifa',
    study: 'Computer Science BSc',
    date: '2017',
  });
  const [experience, setExperience] = useState({
    company: 'Plaqless',
    position: 'SW embedded',
    responsibilities:
      'Worked at Plaqless as a SysAdmin and Embedded C Developer, managing Linux systems and developing real-time firmware for smart dental devices.',
    to: '2022',
    from: '2017',
  });
  const colorize = () => {
    document.documentElement.style.setProperty(
      '--sb-theme-color',
      getRandomColor()
    );
  };
  const toggleEdit = () => {
    if (isEditing) {
      colorize();
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="app-main">
      <div className="flex-row">
        <button className="sb-button" onClick={toggleEdit}>
          {isEditing ? 'Submit' : 'Edit'}
        </button>
        <button className="sb-button" onClick={colorize}>
          Colorize
        </button>
      </div>
      {isEditing ? (
        <>
          <h1>CV Application</h1>
          <div className="resume-fields">
            <General
              data={generalInfo}
              onChange={(field, value) =>
                setGeneralInfo({ ...generalInfo, [field]: value })
              }
            />
            <Study
              data={education}
              onChange={(field, value) =>
                setEducation({ ...education, [field]: value })
              }
            />
            <Work
              data={experience}
              onChange={(field, value) =>
                setExperience({ ...experience, [field]: value })
              }
            />
          </div>
        </>
      ) : (
        <>
          <View
            generalInfo={generalInfo}
            education={education}
            experience={experience}
          />
        </>
      )}
    </div>
  );
}
