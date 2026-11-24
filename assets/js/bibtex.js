// BibTeX buttons on paper cards: toggle the entry, and copy it to the clipboard.
document.querySelectorAll(".paper .bibtex-toggle").forEach((toggle) => {
  const box = toggle.parentElement.querySelector(".bibtex");
  const copy = box.querySelector(".bibtex-copy");
  const code = box.querySelector("code");

  toggle.addEventListener("click", () => {
    box.hidden = !box.hidden;
    toggle.setAttribute("aria-expanded", String(!box.hidden));
  });

  copy.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(code.textContent);
      copy.textContent = "Copied!";
    } catch {
      copy.textContent = "Select & copy manually";
    }
    setTimeout(() => (copy.textContent = "Copy"), 1500);
  });
});
