import React from "react";
import icon from "./../icons/arrow-down2.svg";

export default function Header() {
  return (
    <div className="header">
      <h1 className="header__title">
        {" "}
        Mark <img src={icon} alt="arrow down" /> to
        <span className="header__title-span"> &lt; HTML &gt;</span> Previewer.
      </h1>
    </div>
  );
}
