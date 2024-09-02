import { useNavigate } from "react-router-dom";
import bat from "./bat.svg";

export const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <span style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        <img src={bat} alt="bat" /> I am the night
      </span>
    </div>
  );
};
