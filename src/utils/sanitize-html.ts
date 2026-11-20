import sanitizeHtml from "sanitize-html";

export function sanitizePostContent(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "img",
      "h1",
      "h2",
      "h3",
      "h4",
      "figure",
      "figcaption",
      "iframe",
    ]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      "*": ["class", "id"],
      a: ["href", "name", "target", "rel"],
      img: ["src", "alt", "width", "height", "loading"],
      iframe: ["src", "width", "height", "allow", "allowfullscreen"],
    },
    allowedIframeHostnames: ["www.youtube.com", "youtube.com", "www.youtube-nocookie.com"],
    transformTags: {
      a: sanitizeHtml.simpleTransform("a", {
        rel: "noopener noreferrer",
      }),
    },
  });
}
