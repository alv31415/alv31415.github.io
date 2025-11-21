const root = document.documentElement;
let saved = localStorage.getItem("theme");

if (!saved) {
  saved = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

root.setAttribute("data-theme", saved);

document.getElementById("theme-toggle").onclick = () => {
  const current = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", current);
  localStorage.setItem("theme", current);
};
