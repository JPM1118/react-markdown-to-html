import React from "react";

const Editor = props => {
  return (
    <div className="box--top-margin box">
      <div className="box__header">Editor.</div>
      <div className="box__body">
        <textarea
          className="box__text-area"
          placeholder={props.value}
          onChange={props.onChange}
          type="text"
        />
      </div>
    </div>
  );
};

export default Editor;
