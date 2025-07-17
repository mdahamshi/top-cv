import './css/General.css';

export default function General({ data, onChange, isEditing }) {
  return (
    <div className="section">
      <h2>General Information</h2>
      {isEditing ? (
        <>
          <label className='form-row'>
            Name:
            <input
              type="text"
              placeholder="Name"
              required
              value={data.name}
              onChange={(e) => onChange('name', e.target.value)}
            />
          </label>
          <label className='form-row'>
            Email:
            <input
              type="email"
              placeholder="Email"
              required
              value={data.email}
              onChange={(e) => onChange('email', e.target.value)}
            />
          </label>
          <label className='form-row'>
            Phone:
            <input
              type="tel"
              placeholder="Phone"
              required
              value={data.phone}
              onChange={(e) => onChange('phone', e.target.value)}
            />
          </label>
        </>
      ) : (
        <>
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Phone:</strong> {data.phone}
          </p>
        </>
      )}
    </div>
  );
}
