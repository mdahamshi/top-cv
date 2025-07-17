import './css/Study.css';

export default function Study({ data, onChange, isEditing }) {
  return (
    <div className="section">
      <h2>Educational Experience</h2>
      {isEditing ? (
        <>
        <label className='form-row'>School:
          <input
            type="text"
            placeholder="School Name"
            value={data.school}
            onChange={(e) => onChange('school', e.target.value)}
          />
          </label>
          <label className='form-row'>Title:
          <input
            type="text"
            placeholder="Title of Study"
            value={data.study}
            onChange={(e) => onChange('study', e.target.value)}
          />
          </label>
          <label className='form-row'>Date:
          <input
            type="text"
            placeholder="Date of Study"
            value={data.date}
            onChange={(e) => onChange('date', e.target.value)}
          />
          </label>
        </>
      ) : (
        <>
          <p>
            <strong>School:</strong> {data.school}
          </p>
          <p>
            <strong>Study:</strong> {data.study}
          </p>
          <p>
            <strong>Date:</strong> {data.date}
          </p>
        </>
      )}
    </div>
  );
}
