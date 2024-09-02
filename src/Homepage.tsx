import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { Favorite } from "./Favorite";
import logo from "./logo.svg";

export const Homepage = () => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    if (isLiked) {
      toast("Nice 🫀", {
        closeOnClick: true,
        transition: Bounce,
      });
    } else {
      toast("Why no like? 💔", {
        closeOnClick: true,
        transition: Bounce,
      });
    }
  }, [isLiked]);

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
