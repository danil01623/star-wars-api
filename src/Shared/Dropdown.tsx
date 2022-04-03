import "../styles/Shared.scss";

const Dropdown: React.FC<{
  label: string;
  value: string;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}> = (props) => {
  const { label, value, options, onChange } = props;

  return (
    <div className="dropdown">
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
