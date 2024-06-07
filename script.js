function showSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
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