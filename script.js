function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}
if (navigator.userAgent.match(/MSIE 8/)) {
  window.location.href = "browser_not_support.html";
}
if (navigator.userAgent.match(/MSIE 9/)) {
  window.location.href = "browser_not_support.html";
}
if (navigator.userAgent.match(/MSIE 10/)) {
  window.location.href = "browser_not_support.html";
}
