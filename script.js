const text = document.querySelector("#text p");
      text.innerHTML = text.innerText
        .split("")
        .map(
          (char, i) =>
            `<span style="transform:rotate(${i * 8}deg)">${char}</span>`
        )
        .join("");



const toggleMenu = document.getElementById("toggleMenu");
const toggleNav = document.getElementById("toggleNav");
const toggleClose = document.getElementById("toggleClose");
const closeNav = document.querySelectorAll(".closeNav");

toggleMenu.addEventListener("click", () => {
  // toggleNav.classList.add('absolute');
  console.log("menu");
  toggleNav.classList.remove("-left-80");
  toggleNav.classList.add("left-0");
  toggleClose.classList.remove("hidden")
  toggleClose.classList.add("block")
  toggleMenu.classList.remove("block")
  toggleMenu.classList.add("hidden")
});

toggleClose.addEventListener("click", () => {
    toggleNav.classList.remove("left-0");
    toggleNav.classList.add("-left-80");
    toggleClose.classList.remove("block")
  toggleClose.classList.add("hidden")
  toggleMenu.classList.remove("hidden")
  toggleMenu.classList.add("block")
  });


  closeNav.forEach((e) => {
    e.addEventListener("click", () => {
        toggleNav.classList.remove("left-0");
        toggleNav.classList.add("-left-80");
        toggleClose.classList.remove("block")
      toggleClose.classList.add("hidden")
      toggleMenu.classList.remove("hidden")
      toggleMenu.classList.add("block")
    });
});