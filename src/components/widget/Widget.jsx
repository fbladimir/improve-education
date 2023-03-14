import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./widget.css";

const Widget = ({ type }) => {
  const { currentUser } = useContext(AuthContext);
  const title =
    type === "user"
      ? "University Posts made by: " + currentUser.displayName
      : type === "popular"
      ? " Popular Universities "
      : "Favorite Universities" ;

  const img =
    type === "user"
      ? "/assets/learn.jpg"
      : type === "popular"
      ? "/assets/world.jpg"
      : "/assets/schoolpupils.jpg";

  return (
    <div className="widget">
      <span className="rightTitle">{title}</span>
      <img className="rightImg" src={img} alt="" />
    </div>
  );
};

export default Widget;