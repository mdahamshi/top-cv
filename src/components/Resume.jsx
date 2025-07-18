import { useState } from 'react';
import General from './General.jsx';
import Study from './Study.jsx';
import Work from './Work.jsx';
import View from './View.jsx';
import './css/Button.css';
import {
  sampleExperince,
  sampleEdu,
  sampleGeneralInfo,
} from '../assets/data.jsx';
import './css/Resume.css';
import './css/Form.css';
import { generateID, getRandomColor } from '@sarawebs/sb-utils';
export default function Resume() {
  const [isEditing, setIsEditing] = useState(true);

  const [generalInfo, setGeneralInfo] = useState(sampleGeneralInfo);
  const [education, setEducation] = useState(sampleEdu);
  const [experience, setExperience] = useState(sampleExperince);
  const onWorkAdd = () => {
    setExperience([
      ...experience,
      {
        company: '',
        position: '',
        responsibilities: '',
        from: '',
        to: '',
        open: true,
        id: generateID('experince'),
      },
    ]);
  };
  const onDelete = (idx) => {
    const newExperince = experience.filter((_, i) => i !== idx);
    setExperience(newExperince);
  };
  const onWorkChange = (idx, field, value) => {
    const newExperince = [...experience];
    newExperince[idx][field] = value;
    setExperience(newExperince);
  };
  const toggleCard = (index) => {
    const newExperince = [...experience];
    newExperince[index].open = !experience[index].open;
    setExperience(newExperince);
  };
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
          <div className="resume-fields sb-smooth-appear">
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
              dataArr={experience}
              onAdd={onWorkAdd}
              onChange={onWorkChange}
              toggleCard={toggleCard}
              onDelete={onDelete}
            />
          </div>
        </>
      ) : (
        <View
          generalInfo={generalInfo}
          education={education}
          experienceArr={experience}
        />
      )}
    </div>
  );
}
