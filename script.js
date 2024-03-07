function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}
function downloadFile() {
  const url = 'About_Me.md';
  const link = document.createElement('a');
  link.href = url;
  link.download = 'README.md';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}