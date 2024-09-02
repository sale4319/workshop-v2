import { useNavigate } from "react-router-dom";
import { Favorite } from "./Favorite";
import { useState } from "react";
import logo from "./logo.svg";

export const Homepage = () => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <Favorite likeStatus={isLiked} likeAction={handleLike} />
      {isLiked ? (
        <img
          onClick={() => navigate("/About")}
          src={logo}
          className="App-logo"
          alt="logo"
          data-testid="React-logo"
        />
      ) : null}
    </>
  );
};
