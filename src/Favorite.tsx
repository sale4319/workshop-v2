import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

type Props = { likeStatus: boolean; likeAction: () => void };

export const Favorite = ({ likeStatus, likeAction }: Props) => {
  if (likeStatus) {
    return (
      <FavoriteIcon
        color={"error"}
        onClick={likeAction}
        className="Favorite-position"
      />
    );
  }
  return (
    <FavoriteBorderIcon
      onClick={likeAction}
      color={"error"}
      className="Favorite-position"
    />
  );
};
