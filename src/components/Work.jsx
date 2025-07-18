import './css/Work.css';
import WorkForm from './WorkForm.jsx';

export default function Work({
  dataArr,
  onChange,
  onAdd,
  toggleCard,
  onDelete,
}) {
  return (
    <div className="section flex-col">
      <h2>Practical Experience</h2>
      {dataArr.map((data, idx) => (
        <WorkForm
          data={data}
          key={data.id}
          idx={idx}
          onChange={onChange}
          toggleCard={toggleCard}
          onDelete={onDelete}
        />
      ))}
      <button className="sb-button" onClick={onAdd}>
        + Add Work
      </button>
    </div>
  );
}
