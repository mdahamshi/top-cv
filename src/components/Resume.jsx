import { useState } from 'react';
import General from './General.jsx';
import Study from './Study.jsx';
import Work from './Work.jsx';

import './css/Resume.css';
import './css/Form.css'

export default function Resume() {
  const [isEditing, setIsEditing] = useState(true);

  const [generalInfo, setGeneralInfo] = useState({
    name: 'Mohammad Da',
    email: 'mohammad.dahamshi@gmail.com',
    phone: '0586776939',
  });
  const [education, setEducation] = useState({
    school: 'Unevirsity Of Haifa',
    study: '',
    date: '2017',
  });
  const [experience, setExperience] = useState({
    company: 'Plaqless',
    position: 'SW embedded',
    responsibilities: 'SysAdmin, C developer',
    to: '2022',
    from: '2017',
  });

  const toggleEdit = () => setIsEditing(!isEditing);

  return (
    <div className="app-main">
      <h1>CV Application</h1>
      <div className="resume-fields">
      <General
        data={generalInfo}
        isEditing={isEditing}
        onChange={(field, value) =>
          setGeneralInfo({ ...generalInfo, [field]: value })
        }
      />
      <Study
        data={education}
        isEditing={isEditing}
        onChange={(field, value) =>
          setEducation({ ...education, [field]: value })
        }
      />
      <Work
        data={experience}
        isEditing={isEditing}
        onChange={(field, value) =>
          setExperience({ ...experience, [field]: value })
        }
      />
      </div>
      <button onClick={toggleEdit}>
        {isEditing ? 'Submit' : 'Edit'}
      </button>
    </div>
  );
}
