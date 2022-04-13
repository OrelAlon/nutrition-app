import female from "../css/img/woman.png";
import male from "../css/img/man.png";

const UserGender = ({ id, type, handleCheck }) => {
  return (
    <li onChange={handleCheck} className="liGender">
      <input type={type} name="gender" value={id} id={id}></input>
      <label htmlFor={id}>
        {" "}
        <img
          className="imgGender"
          src={id === "female" ? female : male}
          alt=""
        />
      </label>
    </li>
  );
};

export default UserGender;
