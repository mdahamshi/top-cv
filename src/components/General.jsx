import './css/General.css';

export default function General({ data, onChange }) {
  return (
    <div className="section">
      <h2>General Information</h2>
      <>
        <label className="form-row" htmlFor="name">
          Name:
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            required
            autoComplete="name"
            value={data.name}
            onChange={(e) => onChange('name', e.target.value)}
          />
        </label>

        <label className="form-row" htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
            autoComplete="email"
            value={data.email}
            onChange={(e) => onChange('email', e.target.value)}
          />
        </label>

        <label className="form-row" htmlFor="phone">
          Phone:
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone"
            required
            autoComplete="tel"
            value={data.phone}
            onChange={(e) => onChange('phone', e.target.value)}
          />
        </label>

        <label className="form-row" htmlFor="about">
          About:
          <textarea
            id="about"
            name="about"
            placeholder="About you"
            required
            autoComplete="off"
            value={data.about}
            onChange={(e) => onChange('about', e.target.value)}
          />
        </label>
      </>
    </div>
  );
}
