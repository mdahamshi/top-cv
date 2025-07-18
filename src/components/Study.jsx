import './css/Study.css';

export default function Study({ data, onChange }) {
  return (
    <div className="section">
      <h2>Educational Experience</h2>
      <>
        <label className="form-row">
          School:
          <input
            type="text"
            placeholder="School Name"
            value={data.school}
            onChange={(e) => onChange('school', e.target.value)}
          />
        </label>
        <label className="form-row">
          Title:
          <input
            type="text"
            placeholder="Title of Study"
            value={data.study}
            onChange={(e) => onChange('study', e.target.value)}
          />
        </label>
        <label className="form-row">
          Date:
          <input
            type="text"
            placeholder="Date of Study"
            value={data.date}
            onChange={(e) => onChange('date', e.target.value)}
          />
        </label>
      </>
    </div>
  );
}
