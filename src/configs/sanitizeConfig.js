import sanitize from "sanitize-html";

const sanitizeHtml = html => {
  let string = sanitize(html, {
    allowedTags: sanitize.defaults.allowedTags.concat(["h1", "h2", "img"]),
    allowedAttributes: {
      a: ["href", "name", "target"],
      img: ["src", "alt"]
    }
  });
  string = /&gt;/g.test(string) ? string.replace(/&gt;/g, ">") : string;
  return string;
};

export default sanitizeHtml;
