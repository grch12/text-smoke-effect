const p = document.querySelector("p");
p.innerHTML = p.innerText.replace(/\S/g, "<span>$&</span>");
document.querySelectorAll("p > span").forEach((e, i) => {
  e.style.animationDelay = i * 0.1 + "s";
});
setTimeout(() => {
    p.classList.add("animated");
}, 2000);