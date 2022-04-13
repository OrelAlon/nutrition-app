const Button = ({ type, value, onClick, color }) => {
  return (
    <div>
      <button className="effect1" id={color} type={type} onClick={onClick}>
        {value}
        <span className="bg"></span>
      </button>
    </div>
  );
};

export default Button;
