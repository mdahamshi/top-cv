export default function WorkForm({
  idx,
  data,
  onChange,
  toggleCard,
  onDelete,
}) {
  return (
    <div className="work-card flex-col" key={data.id}>
      <button className="sb-button-card" onClick={() => toggleCard(idx)}>
        {data.open ? 'Hide' : 'Show'} Experince #{idx + 1}
      </button>
      {data.open && (
        <>
          <label className="form-row">
            Company:
            <input
              type="text"
              placeholder="Company Name"
              value={data.company}
              onChange={(e) => onChange(idx, 'company', e.target.value)}
            />
          </label>
          <label className="form-row">
            Position:
            <input
              type="text"
              placeholder="Position Title"
              value={data.position}
              onChange={(e) => onChange(idx, 'position', e.target.value)}
            />
          </label>
          <label className="form-row">
            Responsibilities:
            <textarea
              type="text"
              placeholder="Main Responsibilities"
              value={data.responsibilities}
              onChange={(e) =>
                onChange(idx, 'responsibilities', e.target.value)
              }
            />
          </label>
          <label className="form-row">
            From:
            <input
              type="text"
              placeholder="From"
              value={data.from}
              onChange={(e) => onChange(idx, 'from', e.target.value)}
            />
          </label>
          <label className="form-row">
            To:
            <input
              type="text"
              placeholder="To"
              value={data.to}
              onChange={(e) => onChange(idx, 'to', e.target.value)}
            />
          </label>

          <button className="sb-button danger" onClick={() => onDelete(idx)}>
            Delete Experience
          </button>
        </>
      )}
    </div>
  );
}
