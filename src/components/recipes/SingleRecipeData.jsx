import { useSpring, animated } from "react-spring";

const SingleRecipeData = ({ ingredients }) => {
  const props = useSpring({
    vector: [40, 30, 30],
    display: "grid",
    padding: 50,
    marginLeft: "-250px",
    background: "lightPink",
    backgroundImage:
      "linear-gradient(to right, #fbc2eb 0%, #a6c1ee 51%, #fbc2eb 100%)",
    transform: "translate3d(0px,0,0) scale(1) rotateX(0deg)",
    boxShadow: "0 0 10px 5px",
    border: "10px solid #2D3747",
    shape: "M20,20 L20,380 L380,380 L380,20 L20,20 Z",
    textShadow: "0px 5px 15px rgba(255,255,255,0.5)",
    position: "relative",
    top: "6em",
    borderRadius: "30px",
  });
  return (
    <div className="iningredientsDiv">
      <animated.div style={props}>
        {ingredients.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </animated.div>
    </div>
  );
};

export default SingleRecipeData;
