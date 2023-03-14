export function addScrollEvent() {
  window.addEventListener("scroll", () => {
    var header = document.querySelector("header");
    header.classList.toggle("navScroll", window.scrollY > 0);
    window.scrollY > 0
      ? header.classList.replace("h-16", "h-12")
      : header.classList.replace("h-12", "h-16");
  });
}
