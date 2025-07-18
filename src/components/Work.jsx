import './css/Work.css';

export default function Work({ data, onChange }) {
  return (
    <div className="section">
      <h2>Practical Experience</h2>
      <>
        <label className="form-row">
          Company:
          <input
            type="text"
            placeholder="Company Name"
            value={data.company}
            onChange={(e) => onChange('company', e.target.value)}
          />
        </label>
        <label className="form-row">
          Position:
          <input
            type="text"
            placeholder="Position Title"
            value={data.position}
            onChange={(e) => onChange('position', e.target.value)}
          />
        </label>
        <label className="form-row">
          Responsibilities:
          <textarea
            type="text"
            placeholder="Main Responsibilities"
            value={data.responsibilities}
            onChange={(e) => onChange('responsibilities', e.target.value)}
          />
        </label>
        <label className="form-row">
          From:
          <input
            type="date"
            placeholder="From"
            value={data.from}
            onChange={(e) => onChange('from', e.target.value)}
          />
        </label>
        <label className="form-row">
          To:
          <input
            type="date"
            placeholder="To"
            value={data.to}
            onChange={(e) => onChange('to', e.target.value)}
          />
        </label>
      </>
    </div>
  );
}
