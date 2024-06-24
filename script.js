function showSidebar() {
  window.scrollTo(0,0);
  setTimeout(
    function showSidebar2(){
      const sidebar = document.querySelector('.sidebar');
      sidebar.style.display = 'flex';
    }
  , 500)
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
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