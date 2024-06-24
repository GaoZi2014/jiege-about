function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  window.scrollTo(0,0);
  sidebar.style.display = 'flex';
  setTimeout(
    function showSidebar2(){
      sidebar.style.right = '0px';
    }
  , 200)
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.right = '-500px';
  setTimeout(
    function showSidebar2(){
      sidebar.style.display = 'none';
    }
  , 200)
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


