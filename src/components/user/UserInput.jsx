import "../css/userInput.css";

const UserInput = ({ id, label, value, type, className, handleChange }) => {
  return (
    <div>
      <div className="inputFilledDiv">
        <label htmlFor={id} className="labelInput">
          <input
            type={type}
            id={id}
            className={className}
            value={value}
            onChange={handleChange}
          ></input>
          <span className="spanNameInput">{label}</span>
        </label>
      </div>
    </div>
  );
};

export default UserInput;
