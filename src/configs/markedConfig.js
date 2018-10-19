import marked from "marked";
let configuredMarked = string => {
  marked.setOptions({
    breaks: true
  });

  return marked(string);
};

export default configuredMarked;
