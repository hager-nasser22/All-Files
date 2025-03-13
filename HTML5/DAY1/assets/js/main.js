const div1 = document.getElementsByClassName("div1")[0];
const div2 = document.getElementsByClassName("div2")[0];
const div3 = document.getElementsByClassName("div3")[0];
window.onscroll = function () {
  if (scrollY > 2014) {
    div1.style.animation = "fadeInUp 1s forwards"
    div2.style.animation = "fadeInUp 1s 0.4s forwards"
    div3.style.animation = "fadeInUp 1s 0.8s forwards"
  }
  console.log(scrollY)
}