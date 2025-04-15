// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function imageAnimation() {
  var elem = document.querySelector("#element-container");
  var fix = document.querySelector("#fixed-image");
  elem.addEventListener("mouseenter", () => {
    fix.style.display = "block";
  });
  elem.addEventListener("mouseleave", () => {
    fix.style.display = "none";
  });
  // var elem1 = document.querySelector(".elem1");
  // elem1.addEventListener("mouseenter", () => {
  //   var image = elem1.getAttribute("data-image");
  //   console.log(image);
  //   fix.style.backgroundImage = `url(${image})`;
  // });
  var elems = document.querySelectorAll("#elements");
  elems.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      var image = e.getAttribute("data-image");
      fix.style.backgroundImage = `url(${image})`;
    });
  });
}

imageAnimation();
// swiper js
function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
  });
}
swiperAnimation();

function page04Animation() {
  var items = document.querySelectorAll("#top-items");
  var right = document.querySelector("#page04-right");
  console.log(right.innerHTML);

  console.log(items);
  items.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      e.style.color = "white";
      e.style.marginLeft = "4vw";
      var img = e.getAttribute("data-image");

      right.style.backgroundImage = `url(${img})`;
    });
    e.addEventListener("mouseleave", () => {
      e.style.color = "grey";
      e.style.marginLeft = "0vw";
    });
  });
}
page04Animation();
function menuAnimation(){
  const menu = document.querySelector("nav h3");
  const full = document.querySelector("#full-scr");
  const navimg = document.querySelector("nav img");
  const item=document.querySelector("#full-div2 h3")
  var flag = 0;
  menu.addEventListener("click", function () {
    if (flag == 0) {
      full.style.top = 0;
      navimg.style.opacity = 0;
      item.style.opacity=1;
      flag = 1;
    }
    else{
      full.style.top = "-100%";
      navimg.style.opacity = 1;
      item.style.opacity=1;
      flag = 0;
    }
  });
  
}
menuAnimation();

function loader(){
  const loader=document.querySelector("#loader");
  setTimeout(function(){
  loader.style.top="-100%"
  },3500)
}
loader()



