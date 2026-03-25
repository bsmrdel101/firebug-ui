import bundleCss from "./bundle.css";

export const injectStyles = () => {
  const style = document.createElement("style");
  style.textContent = bundleCss;
  document.head.appendChild(style);
};
