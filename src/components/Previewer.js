import React from "react";
import configuredMarked from "../configs/markedConfig";
import sanitizeHtml from "../configs/sanitizeConfig";

const Previewer = props => {
  return (
    <div className="previewer box">
      <div className="box__header">Previewer.</div>
      <div
        style={{ padding: "0px 10px" }}
        className="box__body"
        dangerouslySetInnerHTML={{
          __html: configuredMarked(sanitizeHtml(props.markdown))
        }}
      />
    </div>
  );
};

export default Previewer;
