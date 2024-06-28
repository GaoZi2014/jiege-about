function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  window.scrollTo(0, 0);
  sidebar.style.display = 'flex';
  setTimeout(
    function showSidebar2() {
      sidebar.style.right = '0px';
    }, 100)
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.right = '-500px';
  setTimeout(
    function showSidebar2() {
      sidebar.style.display = 'none';
    }, 500)
}

function downloadFile() {
  const url = 'About_Me.md';
  const Link = document.createElement('a');
  link.href = url;
  link.download = 'README.md';
  document.body.appendChild(Link);
  link.click();
  document.body.removeChild(Link);
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  let navbar = document.querySelector('nav');
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = '0';
    navbar.style.boxShadow = '5px 5px 5px #00000018';
  } else {
    navbar.style.top = '-50px';
    navbar.style.boxShadow = '0px 0px 0px #00000018';
  }
  prevScrollpos = currentScrollPos;
};

/* Computer Secret */

const image = document.getElementById('secret-onclick');
const imageMobile = document.getElementById('secret-onclick-mobile');
let clickCount = 0;

image.addEventListener('click', () => {
  const loader = document.getElementById('loader');
  const secretText = document.getElementById('secret-text-change');
  const secretText2 = document.getElementById('secret-text-change-2');
  const disappear = document.getElementById('secret-disappear');
  const embedWindow = document.getElementById('sc-embed-cd');
  clickCount++;
    if (clickCount === 2) {
      secretText.innerHTML = "Bro I told you don't click me twice.";
      secretText2.innerHTML = 'Hidden Easter Egg!';
      secretText2.style.animation = 'changecolor';
      secretText2.style.animationDuration = '15s';
      image.style.border = '5px solid #505050';
      secretText2.style.animationIterationCount = 'infinite';
      disappear.style.transform = 'scale(0)';
      embedWindow.style.display = 'block';
      setTimeout(
        function makebtnconDisappear() {
          disappear.style.display = 'none';
          loader.style.display = 'block';
          embedWindow.style.display = 'block';
          setTimeout(
            function f2sc() {
              embedWindow.style.transform = 'scale(1)';
              loader.style.display = 'none';
            }
          , 2000)
        }
      , 1500)
      image.style.width = '180px';
    } else {
      secretText.innerHTML = "You can click me, BUT DON'T CLICK ME TWICE!";
    }
});

imageMobile.addEventListener('click', () => {
  const loader = document.getElementById('loader-mobile');
  const secretText = document.getElementById('secret-text-change-mobile');
  const secretText2 = document.getElementById('secret-text-change-2-mobile');
  const disappear = document.getElementById('secret-disappear-mobile');
  const embedWindow = document.getElementById('sc-embed-cd-mobile');
  clickCount++;
    if (clickCount === 2) {
      secretText.innerHTML = "Bro I told you don't click me twice.";
      secretText2.innerHTML = 'Hidden Easter Egg!';
      secretText2.style.animation = 'changecolor';
      secretText2.style.animationDuration = '15s';
      image.style.border = '5px solid #505050';
      secretText2.style.animationIterationCount = 'infinite';
      disappear.style.transform = 'scale(0)';
      embedWindow.style.display = 'block';
      setTimeout(
        function makebtnconDisappear() {
          disappear.style.display = 'none';
          loader.style.display = 'block';
          embedWindow.style.display = 'block';
          setTimeout(
            function f2sc() {
              embedWindow.style.transform = 'scale(1)';
              loader.style.display = 'none';
            }
          , 2000)
        }
      , 1500)
      imageMobile.style.width = '150px';
    } else {
      secretText.innerHTML = "You can click me, BUT DON'T CLICK ME TWICE!";
    }
});