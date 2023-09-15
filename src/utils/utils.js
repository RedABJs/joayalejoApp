export function addScrollEvent() {
  window.addEventListener("scroll", () => {
    var header = document.querySelector("header");
    header.classList.toggle("navScroll", window.scrollY > 0);
    window.scrollY > 0
      ? header.classList.replace("h-16", "h-12")
      : header.classList.replace("h-12", "h-16");
  });
}

export function wpIcon() {
  window.addEventListener("scroll", () => {
    let mainHeigth = document.querySelector("main").clientHeight;
    let footerHeigth = document.querySelector("footer").clientHeight;
    let ref = document.querySelector(".wpi");

    console.log(
      window.scrollY >= mainHeigth - window.innerHeight - footerHeigth &&
        window.scrollY > 0
    );
    // ? ref.classList.replace("showWPI", "hideWPI")
    // : ref.classList.replace("hideWPI", "showWPI");
  });
}

export function addScrollForText() {
  function handleScroll() {
    const elementos = document.querySelectorAll(".aparecer");
    elementos.forEach((elemento) => {
      const rect = elemento.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < (windowHeight * 2) / 3) {
        elemento.classList.add("aparecer-visible");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
}
