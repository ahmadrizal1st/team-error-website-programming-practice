let section = document.querySelectorAll("section");
let navLink = document.querySelectorAll("nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offside = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("nav a [href*=" + id + "]")
          .classlist.add("active");
      });
    }
  });
};

const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

function home() {
  window.location.href = "index.html";
}

function akreditasi() {
  window.location.href = "#akreditasi";
}

function ig_akreditasi() {
  window.location.href = "https://www.instagram.com/p/CsQWNZorR-7/";
}

function menu() {
  window.location.href = "#menu";
}

function anggota() {
  window.location.href = "#anggota";
}

function biodata() {
  window.location.href = "Bio.html";
}

function bio1() {
  window.location.href = "bio1.html";
}
function bio2() {
  window.location.href = "bio2.html";
}
function bio3() {
  window.location.href = "bio3.html";
}
function bio4() {
  window.location.href = "bio4.html";
}

function family() {
  window.location.href = "Family.html";
}

function flyrizal() {
  window.location.href = "#rizal-family";
}

function flykemal() {
  window.location.href = "#kemal-family";
}

function flydinul() {
  window.location.href = "#dinul-family";
}

function flyaji() {
  window.location.href = "#aji-family";
}

function program() {
  window.location.href = "Program.html";
}

function reverse() {
  window.location.href = "#reverse";
}

function prima() {
  window.location.href = "#prima";
}

function palindrome() {
  window.location.href = "#palindrome";
}

function fun() {
  window.location.href = "Fun.html";
}

function music() {
  window.location.href = "#music";
}

function video() {
  window.location.href = "#video";
}

function toggleScrollTopButton() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
  toggleScrollTopButton();
};
