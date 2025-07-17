import './css/Work.css'

export default function Work({ data, onChange, isEditing }) {
  return (
    <div className="section">
      <h2>Practical Experience</h2>
      {isEditing ? (
        <>
        <label className='form-row'>
          Company:
          <input type="text" placeholder="Company Name" value={data.company} onChange={e => onChange('company', e.target.value)} />
          </label>
          <label className='form-row'>
          Position:
          <input type="text" placeholder="Position Title" value={data.position} onChange={e => onChange('position', e.target.value)} />
          </label>
          <label className='form-row'>
          Responsibilities:
          <input type="text" placeholder="Main Responsibilities" value={data.responsibilities} onChange={e => onChange('responsibilities', e.target.value)} />
          </label>
          <label className='form-row'>
            From:
          <input type="date" placeholder="From" value={data.from} onChange={e => onChange('from', e.target.value)} />
          </label>
          <label className='form-row'>
            To:
          <input type="date" placeholder="To" value={data.to} onChange={e => onChange('to', e.target.value)} />
          </label>
        </>
      ) : (
        <>
          <p><strong>Company:</strong> {data.company}</p>
          <p><strong>Position:</strong> {data.position}</p>
          <p><strong>Responsibilities:</strong> {data.responsibilities}</p>
          <p><strong>From:</strong> {data.from}</p>
          <p><strong>To:</strong> {data.to}</p>
        </>
      )}
    </div>
  );
}